"use client"; 

import { useState, useEffect } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState([]);   
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
   
    fetch("http://localhost:8080/api/") 
      .then((response) => {
        if (!response.ok) {
        
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
      })
      .then((data) => {
        setData(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []); 

 
  return { data, loading, error };
};

export default useFetchUsers;

