import useUserContext from '../hooks/use-user-context';
import { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';

const Navbar = () => {
    const { user, resetUser } = useUserContext();
    const [showLogin, setShowLogin] = useState(false);
    const handleClick = () => setShowLogin(!showLogin);
    const handleLoginSubmit = () => setShowLogin(false);
    let content;

    showLogin ? content = <LoginForm onSubmit={handleLoginSubmit} /> : resetUser();

    return (
        <>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row'>
                    <a className='btn me-auto' href='./'><h3>CS295R - Blog</h3></a>
                    <button className='btn' onClick={handleClick}>Login</button>
                </div>
                <div className='ms-auto'>{content}</div>
            </div>
            <Header />
        </>
    );
};

export default Navbar;
