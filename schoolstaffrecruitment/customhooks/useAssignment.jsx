"use client";
import React, { useEffect, useState } from "react";

const useAssignment = () => {
  // state to hold the assignment
  const [unassignedAssignments, setUnassignedAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect to fetch the assignment
  useEffect(() => {
    const fetchUnassignedAssignment = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("User not authenticated");
        }
        
        setLoading(true); 
        const response = await fetch("http://localhost:8080/api/v1/assignments/unassigned", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch unassigned assignment");
        }

        const data = await response.json();
        
        setUnassignedAssignments(data);
        
        
      } catch (error) {
        console.error("Error fetching assignments:", error);
        setError(error.message); // gives more details about the error 
       
      } finally {
        setLoading(false);
      }
    };


    fetchUnassignedAssignment();
  }, []); 

 
  return { unassignedAssignments, loading, error };
};

export default useAssignment;
