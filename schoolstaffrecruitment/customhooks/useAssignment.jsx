"use client";

import React, { useEffect, useState, useCallback } from "react";

const useAssignment = () => {

  const [unassignedAssignments, setUnassignedAssignments] = useState([]);

  const [acceptedAssignment, setAcceptedAssignment] = useState(null);

  const [timesheet, setTimeSheet] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const fetchUnassignedAssignment = async () => {

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User not authenticated");
      }

      setLoading(true);
      const response = await fetch("http://localhost:8080/api/v1/assignments/unassigned", {
        method: 'GET',
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

      setError(error.message);

    } finally {
      setLoading(false);
    }
  };

  // Trigger the fetchUnassignedAssignment function when the component mounts
  useEffect(() => {
    fetchUnassignedAssignment();
  }, []);

  const acceptAssignment = async (assignmentId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User not authenticated");
      }

      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/v1/assignments/${assignmentId}/accept`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to accept assignment");
      }

      const updatedAssignment = await response.json();

      

      // Takes the accepted assignment and updates the state
      setAcceptedAssignment(updatedAssignment);

      // Create the timesheet for the accepted assignment
      await createTimeSheet(assignmentId);
     

    } catch (error) {
      console.error("Error accepting assignment:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createTimeSheet = async (assignmentId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User not authenticated");
      }

      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/v1/assignments/${assignmentId}/timesheet`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create timesheet");
      }

      const data = await response.json();
      setTimeSheet(data);
    } catch (error) {
      console.error("Error creating timesheet:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTimeSheet = useCallback (async (assignmentId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User not authenticated");
      }

      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/v1/assignments/${assignmentId}/gettimesheet`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch timesheet");
      }

      const data = await response.json();

      setTimeSheet(data); // set the timesheet to the data

    } catch (error) {
      console.error("Error viewing timesheet", error);

      setError(error.message);

    } finally {
      setLoading(false);
    }
  }, []);

  // memoize the fetchAcceptedAssignment function so it does not keep refetching the data 
  const fetchAcceptedAssignment = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("User not authenticated");
      }

      setLoading(true); // set loading to true while waiting for api response

      const response = await fetch(`http://localhost:8080/api/v1/assignments/accepted`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setAcceptedAssignment(null); 
        return;
      }

      const data = await response.json();

      setAcceptedAssignment(data);

    } catch (error) {
      console.error("Error fetching accepted assignments:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    unassignedAssignments, // array of unassigned assignments

    acceptAssignment,// function to accept the assignment

    fetchAcceptedAssignment, // function to fetch the accepted assignment

    acceptedAssignment, // the accepted assignment as an object

    fetchUnassignedAssignment, // function to fetch the unassigned assignment and update the state( unassignedAssignments)

    timesheet, // the timesheet as an object

    fetchTimeSheet, // get the timesheet

   setAcceptedAssignment, // set the accepted assignment

    loading, // boolean to check if the data is loading

    error // error message
  };
};

export default useAssignment;