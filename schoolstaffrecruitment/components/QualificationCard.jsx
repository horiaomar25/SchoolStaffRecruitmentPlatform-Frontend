import React from 'react'
import {useProfile} from '../context/ProfileContext';

const QualificationCard = ({profile}) => {



 

  return (
    <>

    <h2 className="text-3xl font-bold text-center mt-4  ">Qualifications</h2>
    
    <div className='space-y-4 '>
      {profile.qualifications.map((qualification, index) => (
        <div className="card w-96 bg-base-100 border border-black card-xs shadow-md " key={index}>
          <div className="card-body">
              <h3 className="card-title">{qualification.qualificationName}</h3>
              <p className='font-bold '>{qualification.institutionName}</p>
              <p className='text-lg'>{qualification.yearObtained}</p>
             
              <div className="justify-end card-actions">
              </div>
          </div>
        </div>
      ))}
           
      </div>
      
      </>
  )
}

export default QualificationCard