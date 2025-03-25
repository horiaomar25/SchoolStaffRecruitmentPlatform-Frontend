
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async () => {
        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/validate', {
                method: 'POST',
                
            });

            if (response.ok) {
                //If the token is valid, the backend returns {message: "Token is valid"}
                setToken("Token is valid");
            } else {
                setToken(null);
            }
        } catch (error) {
            setError(error.message);
            setToken(null);
        }
    };

    const login = async (username, password) => {
        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/login', {
                method: 'POST',
                
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                validateToken(); //Validate the token after a successful login.
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Login failed"); // Use backend error message if available.
                setToken(null);
            }
        } catch (error) {
            setError(error.message);
            setToken(null);
        }
    };

    const logout = async () => {
        try {
            await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/logout', {
                method: 'POST',
                
            });
            setToken(null);
        } catch (error) {
            setError(error.message);
            setToken(null);
        }
    };

    return { token, error, login, logout };
};

export default useAuth;