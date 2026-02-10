import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../services/api';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/auth/me');
                if(res.status==200 || res.status==201){
                    setUser(res.data);
                }
            } catch {
                setUser(null);
            } 
        };
        fetchUser();
    }, []);


    const logout = async () => {
        await axios.post('/auth/logout');
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{ setUser,user,logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);