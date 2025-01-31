"use client"

import {createContext, useContext, useState, useEffect} from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
    const[profile, setProfile] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');

            if(!token){
                setError('Not Authenticated');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/v1/profile/personal', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                        
                    },
                });

                if(!response.ok){
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

    return (
        <ProfileContext.Provider value={{profile, loading, error}}>
            {children}
        </ProfileContext.Provider>
    )


};

export const useProfile = () => useContext(ProfileContext);