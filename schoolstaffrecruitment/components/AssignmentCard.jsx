import React from 'react'

const AssignmentCard = () => {
  return (
    <div className="card shadow-md bg-neutral text-neutral-content w-full">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>
  )
}

export default AssignmentCard