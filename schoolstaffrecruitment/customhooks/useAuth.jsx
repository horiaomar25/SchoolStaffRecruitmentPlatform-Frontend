
import { useState } from 'react';

const useAuth = () => {
    const [error, setError] = useState(null);

    const validateToken = async () => {
        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Ensure cookies are sent
            });

            console.log("validateToken: Response:", response);

            if (!response.ok) {
                console.log("validateToken: Token Validation Failed.");
                setError("Token validation failed");
                return false; // Indicate validation failure
            }
            console.log("validateToken: Token Validated Successfully.");
            return true; // Indicate validation success
        } catch (error) {
            console.error("validateToken: Error:", error);
            setError(error.message);
            return false; // Indicate validation failure
        }
    };

    const login = async (username, password) => {
        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            console.log("login: Response:", response);

            if (response.ok) {
                console.log("login: Login Successful");
                return true; // Indicate login success
            } else {
                const errorData = await response.json();
                console.error("login: Login Failed:", errorData);
                setError(errorData.message || "Login failed");
                return false; // Indicate login failure
            }
        } catch (error) {
            console.error("login: Error:", error);
            setError(error.message);
            return false; // Indicate login failure
        }
    };

    const logout = async () => {
        try {
            await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("logout: Logged out successfully.");
            return true; // Indicate logout success
        } catch (error) {
            console.error("logout: Error:", error);
            setError(error.message);
            return false; // Indicate logout failure
        }
    };

    return { error, login, logout, validateToken }; // Remove token state
};

export default useAuth;