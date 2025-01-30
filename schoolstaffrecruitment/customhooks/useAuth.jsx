
import { useState } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [error, setError] = useState(null);

  const fetchToken = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token); // Save token in state
        localStorage.setItem('token', data.token); // Store in localStorage for persistence
      } else {
        setError(data.message); // Handle error message from the server
      }
    } catch (error) {
      setError(error.message); // Handle any network or unexpected errors
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return { token, error, fetchToken, logout };
};

export default useAuth;
