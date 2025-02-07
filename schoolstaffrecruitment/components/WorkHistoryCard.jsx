import React from 'react'
import {useProfile} from '../context/ProfileContext';
import Image from 'next/image';

const WorkHistoryCard = () => {

  const { profile, loading, error } = useProfile();

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error...</p>
  

  return (
    <>

    <h2 className="text-3xl font-bold text-center ">Work History</h2>
    
    <div className='space-y-2'>
      {profile.workHistory.map((work, index) => (
        <div className="card w-full bg-base-100 border border-black card-xs shadow-md " key={index}>
          <div className="card-body">
              <h2 className="card-title"></h2>
              <h3 className='font-bold text-2xl'>{work.role}</h3>
              <p>{work.school.schoolName}</p>
              <Image src={work.school.schoolPicture} alt={work.school.schoolName} width={100} height={100} />
              <p>{work.duration}</p>
              <div className="justify-end card-actions">
              </div>
          </div>
        </div>
      ))}
           
      </div>
      
      </>
  )
}

export default WorkHistoryCard