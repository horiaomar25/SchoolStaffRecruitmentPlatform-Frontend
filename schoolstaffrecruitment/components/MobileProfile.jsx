import React, { useState } from 'react'

const MobileProfile = () => {
const[open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div className={`collapse collapse-arrow bg-base-200 ${open ? "collapse-open" : ""}`}>
    <div
      onClick={toggle}
      className="collapse-title text-xl font-medium cursor-pointer"
    >
     Profile Description
    </div>
    <div className={`collapse-content ${open ? "block" : "hidden"}`}>
      <p >Hello</p>
    </div>
  </div>
  )
}

export default MobileProfile