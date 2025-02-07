"use client";
import React from 'react';
import Image from 'next/image';

const AssignmentModal = ({ assignment, handleClose }) => {

  if (!assignment) return null;


  const sentences = assignment.assignmentDescription.split('.');

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
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900"
          onClick={handleClose}
        >
          &times;
        </button>

        <div className="card-body p-6 max-h-[80vh] overflow-y-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <h2 className="card-title">{assignment.position}</h2>



              <div>
                {paragraphs.map((para, index) => (
                  <p key={index} className="mb-4">{para}</p>
                ))}
              </div>
            </div>


            <section>
              {/** Image of School Logo */}
              <Image src={assignment.school?.schoolPicture} alt="school logo" width={300} height={100} />

              <div className='mt-4 leading-9'>
                {/* School name */}
                <p><strong>School:</strong> {assignment.school?.schoolName}</p>
                 {/* School address */}
                <p><strong>School Address:</strong> {assignment.school?.schoolAddress}</p>
               {/* Dates in different format day,date and year in writing */}
                <p><strong>Start Date:</strong> {new Date(assignment.startDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>

                <p><strong>End Date:</strong> {new Date(assignment.endDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>

              </div>
              <div className='flex  mt-4'>
                <button className="btn btn-primary mr-6">Accept</button>
              <button className="btn btn-primary">Deny</button>
              </div>
              
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentModal;
