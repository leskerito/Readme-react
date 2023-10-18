import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function Topbar ({name, handleMaximised}){
    return (
      <div className='topbar-wrap'>
        <h3>
          {name}
        </h3>
        <FontAwesomeIcon icon={faX} onClick={handleMaximised} />
      </div>
    )
  }