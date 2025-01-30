import { useState, useEffect } from 'react';

const useProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // Get the token from localStorage

      if (!token) {
        setError('Not authenticated');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/api/v1/profile/3`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong with API');
        }

        const result = await response.json();
        setData(result); 
        console.log(result);

      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProfile(); // Fetch profile when component mounts

  }, []); // Empty dependency array ensures this effect only runs once (on mount)

  return { data, loading, error }; 
};

export default useProfile;

