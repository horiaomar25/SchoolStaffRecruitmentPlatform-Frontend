
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedToken = getCookie('jwtToken');
        if (storedToken) {
            console.log("useEffect: Stored Token Found:", storedToken); // Log the token
            setToken(storedToken);
            validateToken(storedToken); // Validate the token if it exists on mount
        } else {
            console.log("useEffect: No Stored Token Found.");
        }
    }, []);

    const validateToken = async (jwtToken) => {
        try {
            if (!jwtToken) {
                console.log("validateToken: No Token Provided.");
                setToken(null);
                return;
            }

            console.log("validateToken: Validating Token:", jwtToken); // Log the token

            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                credentials: 'include'
            });

            console.log("validateToken: Response:", response); // Log the response

            if (response.ok) {
                console.log("validateToken: Token Validated Successfully.");
                setToken(jwtToken); // Update the state with the token
            } else {
                console.log("validateToken: Token Validation Failed.");
                setToken(null);
            }
        } catch (error) {
            console.error("validateToken: Error:", error);
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

            console.log("login: Response:", response); // Log the response

            if (response.ok) {
                const jwtToken = getCookie('jwtToken');
                console.log("login: Token Retrieved:", jwtToken); // Log the retrieved token
                setToken(jwtToken);
                validateToken(jwtToken); // Validate the token after a successful login.
            } else {
                const errorData = await response.json();
                console.error("login: Login Failed:", errorData);
                setError(errorData.message || "Login failed");
                setToken(null);
            }
        } catch (error) {
            console.error("login: Error:", error);
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
            console.log("logout: Logged out successfully.");
        } catch (error) {
            console.error("logout: Error:", error);
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