
"use client";

import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const [error, setError] = useState(null);
    const router = useRouter();

    const login = async (username, password) => {
        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();
            Cookies.set('jwtToken', data.token, { expires: 7 }); // Set cookie

            return true; // Indicate successful login
        } catch (err) {
            setError(err.message);
            return false;
        }
    };

    const validateToken = useCallback(async () => {
        const token = Cookies.get('jwtToken');

        if (!token) {
            return false;
        }

        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/validate', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                return false;
            }

            return true;
        } catch (err) {
            return false;
        }
    }, []);

    return { error, login, validateToken };
};

export default useAuth;