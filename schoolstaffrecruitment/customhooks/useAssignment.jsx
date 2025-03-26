"use client";

import React, { useEffect, useState, useCallback } from "react";
import Cookies from 'js-cookie'; 

const useAssignment = () => {
  const [unassignedAssignments, setUnassignedAssignments] = useState([]);
  const [acceptedAssignment, setAcceptedAssignment] = useState(null);
  const [timesheet, setTimeSheet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUnassignedAssignment = async () => {
      try {
          const token = Cookies.get('jwtToken'); // Use Cookies.get()

          if (!token) {
              throw new Error("User not authenticated");
          }

          setLoading(true);
          const response = await fetch("https://schoolstaffrecruitmentplatform.onrender.com/api/v1/assignments/unassigned", {
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

  useEffect(() => {
      fetchUnassignedAssignment();
  }, []);

  const acceptAssignment = async (assignmentId) => {
      try {
          const token = Cookies.get('jwtToken'); // Use Cookies.get()

          if (!token) {
              throw new Error("User not authenticated");
          }

          setLoading(true);
          const response = await fetch(`https://schoolstaffrecruitmentplatform.onrender.com/api/v1/assignments/${assignmentId}/accept`, {
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
          setAcceptedAssignment(updatedAssignment);
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
          const token = Cookies.get('jwtToken'); // Use Cookies.get()

          if (!token) {
              throw new Error("User not authenticated");
          }

          setLoading(true);
          const response = await fetch(`https://schoolstaffrecruitmentplatform.onrender.com/api/v1/assignments/${assignmentId}/timesheet`, {
              method: 'POST',
              headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
              },
          });

          const data = await response.json();
          setTimeSheet(data);
      } catch (error) {
          console.error("Error creating timesheet:", error);
          setError(error.message);
      } finally {
          setLoading(false);
      }
  };

  const fetchTimeSheet = useCallback(async (assignmentId) => {
      try {
          const token = Cookies.get('jwtToken'); // Use Cookies.get()

          if (!token) {
              throw new Error("User not authenticated");
          }

          setLoading(true);
          const response = await fetch(`https://schoolstaffrecruitmentplatform.onrender.com/api/v1/assignments/${assignmentId}/gettimesheet`, {
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
          setTimeSheet(data);

      } catch (error) {
          console.error("Error viewing timesheet", error);
          setError(error.message);
      } finally {
          setLoading(false);
      }
  }, []);

  const fetchAcceptedAssignment = useCallback(async () => {
      try {
          const token = Cookies.get('jwtToken'); // Use Cookies.get()

          if (!token) {
              throw new Error("User not authenticated");
          }

          setLoading(true);
          const response = await fetch(`https://schoolstaffrecruitmentplatform.onrender.com/api/v1/assignments/accepted`, {
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