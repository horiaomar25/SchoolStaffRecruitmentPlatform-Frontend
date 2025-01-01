"use client"; // Required for Next.js

import { useState, useEffect } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState([]);   // To store fetched data
  const [loading, setLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null); // To store error messages

  useEffect(() => {
    // Make a request to the backend API
    fetch("http://localhost:8080/api/users") // Replace with the correct endpoint
      .then((response) => {
        if (!response.ok) {
          // If the response status is not OK, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        setData(data); // Set the fetched data in the state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set the error message if the request fails
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array to run only once when the component mounts

  // Return the data, loading state, and error message to the component
  return { data, loading, error };
};

export default useFetchUsers;

