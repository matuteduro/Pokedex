import "./Bottombar.css"
import React from 'react'

const Bottombar = () => {
  return (
    <div className="bottom">
        <div className="bottom-btn">
            <p className="bg-circle-white">A</p>
            <p>See Details</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">A</p>
            <p>Habitat</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">A</p>
            <p>Sort</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">A</p>
            <p>See Evaluation</p>
        </div>
        <div className="bottom-btn">
            <p className="bg-circle-white">A</p>
            <p>Back</p>
        </div> 
    </div>
  )
}

export default Bottombar