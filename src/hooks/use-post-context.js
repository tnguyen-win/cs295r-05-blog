import { useContext } from 'react';
import PostContext from '../context/posts';

const usePostContext = () => useContext(PostContext);

export default usePostContext;
