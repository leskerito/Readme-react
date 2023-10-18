import React from "react"

export default function Topbar ({name}){
    return (
      <div className='topbar-wrap'>
        <h3>
          {name}
        </h3>
      </div>
    )
  }