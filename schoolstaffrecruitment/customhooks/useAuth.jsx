
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async () => {
        try {
            // Retrieve the token from cookies
            const jwtToken = getCookie('jwtToken');

            if (!jwtToken) {
                setToken(null);
                return;
            }

            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}` // Include the token in the Authorization header
                },
                credentials: 'include'
            });

            if (response.ok) {
                setToken('Token is valid');
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
                validateToken(); // Validate the token after a successful login.
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

    // Helper function to get cookie value
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    return { token, error, login, logout };
};

export default useAuth;