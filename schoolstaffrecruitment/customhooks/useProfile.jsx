import { useState, useEffect } from 'react';

const useProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/api/v1/profile/`); 

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const result = await response.json();
        console.log(result);

       

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

 

    fetchProfile();
  }, []);

  return { data, loading, error };
};

export default useProfile;
