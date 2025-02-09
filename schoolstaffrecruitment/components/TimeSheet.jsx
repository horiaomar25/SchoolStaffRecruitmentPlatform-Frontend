import React from 'react'

const TimeSheet = ({ handleClose }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      {/* Overlay */}
      <div className="card text-primary-content w-full md:w-8/12 lg:w-9/12 xl:w-7/12 border bg-white border-black z-10 relative">


        <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

        <div className="card-body p-6 max-h-[80vh] overflow-y-auto">

          <div className="grid grid-cols-1 ">

            
              <h2 className="card-title">TimeSheet</h2>
            

            <section className='flex flex-col justify-center items-center'>
              <div className='flex flex-row justify-evenly'>
                <h2 className='mr-8'>Dates</h2>
                <input type="checkbox" className='checkbox checkbox-lg border-x-black checked:bg-green-500' />

              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSheet