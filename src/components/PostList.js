import { useState } from 'react';
import useUserContext from '../hooks/use-user-context';
import usePostContext from '../hooks/use-post-context';
import PostCard from './PostCard';

const PostList = () => {
    const { user } = useUserContext();
    const { featuredPosts, categories, posts } = usePostContext();
    const [postsToRender, setPostsToRender] = useState([user.length === 0 ? featuredPosts : posts]);
    // const renderedPosts = postsToRender.map(post => <PostCard key={post.id} post={post} />);

    // return <div className='row row-cols-1 row-cols-lg-2 my-lg-5'>{renderedPosts}</div>;
};

export default PostList;
