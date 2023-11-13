import { Trash } from 'react-bootstrap-icons';
import { BsFillGearFill } from 'react-icons/bs';
import { useContext } from 'react';
import PostsContext from '../context/posts';
import UserContext from '../context/user';
import parse from 'html-react-parser';

function PostCard({ post }) {
    const { deletePostById } = useContext(PostsContext);
    const { user } = useContext(UserContext);
    const handleDeleteClick = () => deletePostById(post.id);
    const date = new Date(post.datetime);

    return (
        <div className='col'>
            <div className='card'>
                <img alt='post' src={`data:image/png;base64, ${post.image}`} />
                <div className='card-body'>
                    <div className='d-flex flex-row justify-content-between'>
                        <div className='border rounded border-primary p-1 text-primary'>{post.category}</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='me-2 mt-2'>
                                {user && user.id === post.userId ? <a href={`/posts/edit/${post.id}`}><BsFillGearFill color='black' /></a> : ''}
                            </div>
                            <div>
                                {user && user.id === post.userId ? <button className='btn btn-link' onClick={handleDeleteClick}><Trash color='red' /></button> : ''}
                            </div>
                        </div>
                    </div>
                    <h5 className='card-title text-center'>{post.title}</h5>
                    <div className='card-text'>{parse(post.content.substring(0, 100))}
                        <a href={`/posts/${post.id}`}>more...</a>
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='text-muted small'>
                        {post.user.name} in {date.toLocaleDateString('en-us', { year: 'numeric', month: 'short' })}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PostCard;
