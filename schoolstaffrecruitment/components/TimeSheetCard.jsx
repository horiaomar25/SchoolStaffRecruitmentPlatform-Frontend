import React, {useState} from 'react'
import timesheetlogo from '../public/timesheetlogo.jpg'
import Image from 'next/image'
import TimeSheet from './TimeSheet';

const TimeSheetCard = () => {
  const [open, setOpen] = useState(false);
  
  const handleModal = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-9 pt-9">
      <Image
        src={timesheetlogo}
        alt="timesheetlogo"
        className="rounded-xl  w-48" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">TimeSheet</h2>
     
      <div className="card-actions">
        <button onClick={handleModal}className="btn btn-primary mt-5">View Timesheet</button>
        
      </div>
    </div>
    { open && <TimeSheet handleClose={handleClose}/>}
  </div>
  )
}

export default TimeSheetCard