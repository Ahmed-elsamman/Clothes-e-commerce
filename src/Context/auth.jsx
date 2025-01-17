import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserAccountContext = createContext();

export function UserAccountProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const loginUser = (credentials) => {
        const userData = {
            email: credentials.email,
            firstName: credentials.firstName || credentials.email.split('@')[0],
            lastName: credentials.lastName || ''
        };
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("tkn", "demo-token");
    };

    const registerUser = (userData) => {
        const { confirmPassword, ...userDataToSave } = userData;
        setUser(userDataToSave);
        // setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(userDataToSave));
        localStorage.setItem("tkn", "demo-token");
        return true;
    };

    const logoutUser = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        localStorage.removeItem("tkn");
        // navigate('/login')
    };

    return (
        <UserAccountContext.Provider value={{ 
            loginUser, 
            logoutUser, 
            registerUser,
            isLoggedIn, 
            user 
        }}>
            {children}
        </UserAccountContext.Provider>
    );
}
