import React from 'react'
import "./NftCard.css"

function NftCard(props) {

  const cutter = (str)=>{
    const difference = str.length()-29;
    const shortString = str.splice(29, difference);
    return shortString + "...";
  }

  return (
    <div className="nftCard">
        <img src={props.img} />
        <div>
            <p>{props.name}</p>
            <p>UUID: {()=>cutter(props.uuids)}</p>
        </div>
        <button>{props.power} MP</button>
    </div>
  )
}

export default NftCard