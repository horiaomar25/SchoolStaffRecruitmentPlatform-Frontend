
import React, {useState} from 'react'

const useAuth = () => {
 
   const [token, setToken] = useState(localStorage.getItem('token') || null); // store authenication token/ null not

   const [error, setError] = useState(null);


    // async function to fetch the token
    const fetchToken = async (username, password) => {
       

        try{
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
              });

              const data = response.json();

            if(response.ok){
                setToken(data.token);
                localStorage.setItem('token', data.token);
            } else {
                setError(data.message);
            }



        } catch (error) {
            setError(error.message);

        }
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
      };
    
    return { token, error, fetchToken, logout };



 




}

export default useAuth
