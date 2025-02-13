import React from 'react'
import {useProfile} from '../context/ProfileContext';


import Image from 'next/image';

const WorkHistoryCard = ({profile}) => {




  return (
    <>

<div>
      <h2 className="text-3xl font-bold text-center">Work History</h2>
      <div className='space-y-2'>
        {profile.workHistory.map((work, index) => (
          <div className="card w-full bg-base-100 border border-black card-xs shadow-md flex flex-row items-center p-4" key={index}>
            <Image src={work.school.schoolPicture} alt={work.school.schoolName} width={70} height={70} className="mr-4" />
            <div className="card-body">
              <h3 className='font-bold text-2xl'>{work.role}</h3>
              <p>{work.school.schoolName}</p>
              <p > {work.duration}</p>
              <div className="justify-end card-actions"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </>
  )
}

export default WorkHistoryCard