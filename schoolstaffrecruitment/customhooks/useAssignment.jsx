"use client";
import React, { useEffect, useState } from "react";

const useAssignment = () => {
  // state to hold the assignment
  const [assignments, setAssignments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch the assignment
  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("User not authenticated");
        }

        const response = await fetch("http://localhost:8080/api/v1/assignments/unassigned", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch assignment");
        }

        const data = await response.json();
        

        setAssignments(data);
        
      } catch (error) {
        console.error("Error fetching assignments:", error);
        setError(error); 
        setLoading(false); 
      }
    };

    fetchAssignment();

    
  
  }, []); 
   
  return { assignments, loading, error };
};

export default useAssignment;
