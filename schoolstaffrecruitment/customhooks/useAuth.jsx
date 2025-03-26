
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedToken = getCookie('jwtToken');
        if (storedToken) {
            setToken(storedToken);
            validateToken(storedToken); // Validate the token if it exists on mount
        }
    }, []);

    const validateToken = async (jwtToken) => {
        try {
            if (!jwtToken) {
                setToken(null);
                return;
            }

            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                credentials: 'include'
            });

            if (response.ok) {
                setToken(jwtToken); // Update the state with the token
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
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const jwtToken = getCookie('jwtToken');
                setToken(jwtToken);
                validateToken(jwtToken); // Validate the token after a successful login.
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Login failed");
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
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setToken(null);
        } catch (error) {
            setError(error.message);
            setToken(null);
        }
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    return { token, error, login, logout };
};

export default useAuth;