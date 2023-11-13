import './App.css';
import { useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostsContext from './context/posts';

function App() {
    const { fetchFeaturedPosts, fetchCategories } = useContext(PostsContext);

    useEffect(() => {
        fetchFeaturedPosts();
        fetchCategories();
    }, []);

    return (
        <>
            <Navbar />
            <Home />
        </>
    );
}

export default App;
