
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  // Should deal with page reload
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      validateToken(storedToken);
    }
  }, []);


  const validateToken = async (token) => {
    try{
      const response = await fetch('http://localhost:8080/api/v1/auth/validate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if(response.ok){
        setToken(token);
      } else {
        logout();

      }
    } catch (error) {
      setError(error.message);
      logout();
    }
  };

 

  const fetchToken = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token); 
        localStorage.setItem('token', data.token); 
      } else {
        setError(data.message); 
      }
    } catch (error) {
      setError(error.message); 
    }
  };

  const register = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username, 
          password 
          
        }),
      });

      const data = await response.json();

      if (response.ok) {
        
        fetchToken(username, password); 
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return { token, error, fetchToken, logout, register };
};

export default useAuth;
