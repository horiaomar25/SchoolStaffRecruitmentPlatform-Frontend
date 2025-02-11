import React from 'react';

const TimeSheet = ({ handleClose, timeSheet }) => {
  
  const { timeSheetDates } = timeSheet;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      {/* Overlay */}
      <div className="card text-primary-content w-full md:w-8/12 lg:w-9/12 xl:w-7/12 border bg-white border-black z-10 relative">
        <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

        <div className="card-body p-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 ">
            <h2 className="card-title">TimeSheet</h2>

            <section className="flex flex-col justify-center items-center mt-4">
              <h2 className="mr-8 mb-4">Dates</h2>
              <div className="flex flex-col space-y-2">
                {timeSheetDates.map((dateObj, index) => {
                  const date = new Date(dateObj.date);  // Convert date string to Date object
                  if (isNaN(date)) {
                    return <div key={index}>Invalid Date</div>;
                  }
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <input type="checkbox" className="checkbox checkbox-lg border-x-black checked:bg-green-500" />
                      <span>{date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheet;
