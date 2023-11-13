import { useState } from 'react';
import useUserContext from '../hooks/use-user-context';
import usePostContext from '../hooks/use-post-context';

const LoginForm = ({ onSubmit }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { fetchUser } = useUserContext();
    const { fetchPosts } = usePostContext();
    const handleSubmit = async event => {
        event.preventDefault();

        const user = await fetchUser(userId, password);

        if (user) {
            fetchPosts(userId);
            setUserId('');
            setPassword('');
            onSubmit();
        } else setError(true);
    };

    return (
        <>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit}>
                <input className='form-control' type="text" onChange={(event) => { setUserId(event.target.value); }} placeholder="user id" />
                <input className='form-control' type='password' onChange={(event) => { setPassword(event.target.value); }} placeholder='password' />
                <button className='w-100 btn btn-primary'>Login</button>
            </form>
            <div className='mt-3'>{error ? <small className='text-danger'>Failed attempt at login</small> : ''}</div>
        </>
    );
};

export default LoginForm;
