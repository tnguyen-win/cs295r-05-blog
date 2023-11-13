import PostList from '../components/PostList';
import useUserContext from '../hooks/use-user-context';

const Home = () => {
    const { user } = useUserContext();

    return (
        <>
            <div className='d-flex justify-content-center'>
                <h1>{user.length === 1 ? 'My Posts' : 'Featured Posts'}</h1>
                <PostList />
            </div>
        </>
    );
};

export default Home;
