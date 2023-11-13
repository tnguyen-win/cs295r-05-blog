import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';
import { Provider as UserProvider } from './context/user';
import { Provider as PostsProvider } from './context/posts';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserProvider>
            <PostsProvider>
                <App />
            </PostsProvider>
        </UserProvider>
    </React.StrictMode>
);
