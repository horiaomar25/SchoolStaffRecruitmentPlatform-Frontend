
import { useState } from 'react';

const useAuth = () => {
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

    const login = async (username, password) => {
        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });

            console.log("login: Response:", response);

            if (response.ok) {
                console.log("login: Login Successful");
                setIsAuthenticated(true); // Set login status to true
            } else {
                const errorData = await response.json();
                console.error("login: Login Failed:", errorData);
                setError(errorData.message || "Login failed");
                setIsAuthenticated(false); // Set login status to false
            }
        } catch (error) {
            console.error("login: Error:", error);
            setError(error.message);
            setIsAuthenticated(false); // Set login status to false
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
            console.log("logout: Logged out successfully.");
            setIsAuthenticated(false); // Set login status to false
        } catch (error) {
            console.error("logout: Error:", error);
            setError(error.message);
        }
    };

    return { isAuthenticated, error, login, logout }; // Return isAuthenticated state
};

export default useAuth;