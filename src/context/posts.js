import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const PostContext = createContext();

function Provider({ children }) {
    const URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://citweb.lanecc.net:5025';
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const fetchFeaturedPosts = useCallback(async () => {
        const response = await axios.get(`${URL}/posts?_expand=user&_sort=datetime&_order=desc&_start=0&_end=12`);

        setPosts(response.data);
    }, []);
    const fetchCategories = useCallback(async () => {
        const response = await axios.get(`${URL}/categories`);

        setCategories(response.data);
    }, []);
    const fetchPosts = useCallback(async userId => {
        const response = await axios.get(`${URL}/posts?userid=${userId}&_expand=user&_sort=datetime&_order=desc`);

        setPosts(response.data);
    }, []);
    const editPostById = async id => {
        const response = await axios.put(`${URL}/posts/${id}`);
        const updatedPosts = posts.map(post => {
            if (post.id === id) return { ...post, ...response.data };

            return post;
        });

        setPosts(updatedPosts);
    };
    const deletePostById = async id => {
        await axios.delete(`${URL}/posts/${id}`);

        const updatedPosts = posts.filter(post => post.id !== id);

        setPosts(updatedPosts);
    };
    const createPost = async (newPost, user) => {
        const response = await axios.post(URL, { newPost });
        const updatedPosts = [...posts, response.data];

        setPosts(updatedPosts);
    };
    const valueToShare = {
        featuredPosts,
        categories,
        posts,
        fetchFeaturedPosts,
        fetchCategories,
        fetchPosts,
        editPostById,
        deletePostById,
        createPost
    };

    return <PostContext.Provider value={valueToShare}>{children}</PostContext.Provider>;
}

export { Provider };
export default PostContext;
