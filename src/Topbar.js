import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'

export default function Topbar ({name, handleMaximized, isMaximized}){
    return (
      <div className='topbar-wrap'>
        <h3>
          {name}
        </h3>
        <FontAwesomeIcon icon={ isMaximized ? faDownLeftAndUpRightToCenter: faUpRightAndDownLeftFromCenter} onClick={handleMaximized} />
      </div>
    )
  }