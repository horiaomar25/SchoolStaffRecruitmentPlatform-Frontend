import React, { useEffect } from 'react'

const useAssignment = () => {
  // state to hold the assignment
  const [assignments, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch the assignment
  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('User not authenticated');
        }

        const response = await fetch('http://localhost:8080/api/v1/assignments/unassigned',{
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch assignment');
        }

        const data = await response.json();
        setAssignment(data);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchAssignment();

  }, [])


  console.log(assignments); 
  return { assignments, loading, error };
}

export default useAssignment
