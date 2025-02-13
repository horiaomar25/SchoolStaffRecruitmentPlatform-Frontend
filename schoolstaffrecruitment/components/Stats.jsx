import React from 'react'
import { useProfile } from '@/context/ProfileContext';
import useAssignment from '../customhooks/useAssignment';

const Stats = ({acceptedAssignment}) => {
    const { profile, loading: profileLoading, error: profileError } = useProfile();

     const { unassignedAssignments, loading: unassignedAssignmentLoading, error: unassignedAssignmentError } = useAssignment();

  if (profileLoading || unassignedAssignmentLoading) {
    return <div>Loading...</div>;
  }



  if (profileError || unassignedAssignmentError) {
    return <h2 className="font-bold  text-center">Error loading data. Please refresh</h2>;
  }
  return (
    <><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">Assignments Available</h2>
        <p className="text-xl">{unassignedAssignments.length}</p>
      
      </div>
    </div>
  
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">Current Role</h2>
        <p className="text-xl">Year 1 Teacher</p>
       
      </div>
    </div>
  
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">Completed Assignment</h2>
        <p className="text-xl">{profile.workHistory.length}</p>
       
      </div>
    </div>
  </div>
  </> 
  )
}

export default Stats