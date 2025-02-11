import React from 'react'
import timesheetlogo from "../public/timesheetlogo.png"
import Image from 'next/image'

const EmptyTimeSheetCard = () => {
  return (
    <div  className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
           <Image
            src={timesheetlogo}
            alt="TimeSheet Logo"
            width={200}
            height={100}
            className="rounded-xl shadow-sm "
          /> 
        </figure>
        <div className="card-body items-center text-center">
      
          <h3>No TimeSheet Avaliable</h3>
         
        </div>
      </div>
  )
}

export default EmptyTimeSheetCard