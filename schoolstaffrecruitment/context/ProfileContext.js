"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = Cookies.get('jwtToken'); // Use Cookies.get()

            if (!token) {
                setError('Not Authenticated');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/profile/personal', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                });

                if (!response.ok) {
                    throw new Error('Not Authenticated');
                }

                const result = await response.json();
                setProfile(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const updateProfile = async (updatedData) => {
        const token = Cookies.get('jwtToken'); // Use Cookies.get()

        if (!token) {
            setError('Not Authenticated');
            return;
        }

        try {
            const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/profile/update', {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const result = await response.json();
            setProfile(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProfileContext.Provider value={{ profile, loading, error, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);