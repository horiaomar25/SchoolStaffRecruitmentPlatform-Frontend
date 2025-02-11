import React from 'react'
import Image from 'next/image';

const AssignmentDetails = ({ acceptedAssignment, handleClose }) => {

  const sentences = acceptedAssignment.assignmentDescription.split('.');

  // Slice the sentences into paragraphs
  const sentencesPerParagraph = 3;
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
    paragraphs.push(sentences.slice(i, i + sentencesPerParagraph).join('.') + '.');
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
    {/* Overlay */}
    <div className="card text-primary-content w-full md:w-8/12 lg:w-9/12 xl:w-7/12 border bg-white border-black z-10 relative">
      {/* Modal Content */}
      {/* Close Button */}
      
      <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

      <div className="card-body p-6 max-h-[80vh] overflow-y-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <h2 className="card-title">{acceptedAssignment.position}</h2>



            <div>
              {paragraphs.map((para, index) => (
                <p key={index} className="mb-4">{para}</p>
              ))}
            </div>
          </div>


          <section>
            {/** Image of School Logo */}
            <Image src={acceptedAssignment.school?.schoolPicture} alt="school logo" width={150} 
height={100} 
 />

            <div className='mt-4 leading-9'>
              {/* School name */}
              <p><strong>School:</strong> {acceptedAssignment.school?.schoolName}</p>
               {/* School address */}
              <p><strong>School Address:</strong> {acceptedAssignment.school?.schoolAddress}</p>
             {/* Dates in different format day,date and year in writing */}
              <p><strong>Start Date:</strong> {new Date(acceptedAssignment.startDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>

              <p><strong>End Date:</strong> {new Date(acceptedAssignment.endDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>

            </div>
            
            
          </section>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AssignmentDetails