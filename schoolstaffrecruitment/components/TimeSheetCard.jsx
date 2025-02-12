import React, {useEffect, useState} from 'react'
import timesheetlogo from '../public/timesheetlogo.png'
import Image from 'next/image'
import TimeSheet from './TimeSheet';

import EmptyTimeSheetCard from './EmptyTimeSheetCard';

const TimeSheetCard = ({timeSheet, loading, error}) => {
 

  const [open, setOpen] = useState(false);
  
  const handleModal = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <div>{error}</div>

  }

  if(!timeSheet) {
    return <EmptyTimeSheetCard/>
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <Image
        src={timesheetlogo}
        alt="timesheetlogo"
        className="rounded-xl w-40 h-40 object-cover"/>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">TimeSheet</h2>
     
      <div className="card-actions">
        <button onClick={handleModal}className="btn btn-primary mt-5">View Timesheet</button>
        
      </div>
    </div>
    { open && <TimeSheet handleClose={handleClose} timeSheet={timeSheet}/>}
  </div>
  )
}

export default TimeSheetCard