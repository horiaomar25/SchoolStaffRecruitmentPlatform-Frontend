
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  // Should deal with page reload
  useEffect(() => {
      validateToken();
  }, []);


  const validateToken = async (token) => {
    try{
      const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if(response.ok){
        setToken("Token is valid");
      } else {
        logout();

      }
    } catch (error) {
      setError(error.message);
      logout();
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

      if (response.ok) {
        validateToken();
      } else {
        setError("Login failed"); 
      }

    } catch (error) {
      setError(error.message); 
    }
  };

  const logout = async  () => {
    try {
      const response = await fetch('https://schoolstaffrecruitmentplatform.onrender.com/api/v1/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setToken(null)
    } catch (error){
      setError(error.message)
    }
  }

  

  // const logout = () => {
  //   setToken(null);
  //   localStorage.removeItem('token');
  // };

  return { token, error, login, logout };
};

export default useAuth;
