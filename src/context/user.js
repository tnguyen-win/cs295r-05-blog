import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const UserContext = createContext();

function Provider({ children }) {
    const URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://citweb.lanecc.net:5025';
    const [user, setUser] = useState([]);
    const fetchUser = useCallback(async (userId, password) => {
        const response = await axios.get(`${URL}/users?userid=${userId}&password=${password}`);

        setUser(response.data.length === 1 ? response.data[0] : null);
    }, []);
    const editUserById = async (id, newValues) => {
        const response = await axios.put(`${URL}/users/${id}`, newValues);
        const updatedUser = response.data;

        setUser(updatedUser);
    };
    const resetUser = async () => {

    };
    const createUser = async newUser => {

    };
    const valueToShare = {
        user,
        fetchUser,
        editUserById,
        resetUser,
        createUser
    };

    return <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>;
}

export { Provider };
export default UserContext;
