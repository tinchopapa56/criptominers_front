import React from 'react'
import "./BlockInfo.css"

function BlockInfo(props) {
  return (
    <div className="blockInfo">
        <p>{props.text}</p>
        <button>{props.button}</button>
    </div>
  )
}

export default BlockInfo