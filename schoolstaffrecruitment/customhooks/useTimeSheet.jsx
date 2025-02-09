import React, { useEffect, useState } from 'react'

const useTimeSheet = () => {

  const [timesheet, setTimeSheet] = useState([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTimeSheet = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("User not authenicated")
        }

        setLoading(true)
        const response = await fetch(`http://localhost:8080/api/v1/assignments/${assignmentId}/gettimesheet`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },

        })

        if (!response.ok) {
          throw new Error("Failed to accept assignment");
        }

        const data = await response.json();

        setTimeSheet(data)

      } catch (error) {
        console.error("Error viewing timesheet", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTimeSheet();

  }, [assignmentId])

  const createTimeSheet = async (assignmentId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User not authenticated");
      }

      setLoading(true)
      const response = await fetch(`http://localhost:8080:/api/v1/assignments/${assignmentId}/timesheet`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create assignment");
      }

      const data = await response.json();

      setTimeSheet(timesheet);

    } catch (error){
      
    }
    }



  return { timesheet, loading, error, createTimeSheet }
}

export default useTimeSheet