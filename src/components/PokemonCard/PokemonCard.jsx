import React, { useState } from 'react'
import "./PokemonCard.css"
import pokeball from "../../images/pokeball.png"
import Model from "../Model/Model"

function PokemonCard({id, name, image, type, weight, height, stats, statsName}) {

const [isShown, setIsShown] = useState(false);

const [modelOpen, setModelOpen] = useState(false);

function modelHandler(){
    setModelOpen(true);
}
function closeModelHandler(){
    setModelOpen(false);
}

  return (
    <div className="container">
        {isShown && (
        <div className="show">
            <div className="stat-container-title">
                <img src={image} alt={name} className="image-title"/>
                <p style={{width: "180px", color:"black"}}>No. {id}</p>
                <p>{name}</p>
                <img src={pokeball} alt="pokeball" className='pokeball-title'/>
            </div>
            <img src={image} alt={name}/>
            <div style={{display:"flex", width:"100%"}}>
                <div style={{background: "#dbdbd9", textAlign:"center"}} className="stats-left">
                <p>{type}</p>
                <p>{height}0 cm</p>
                <p>{weight} kg</p>
                </div>
            </div>
            <div className="base-stats">
                <div>
                    {statsName.map((stats)=> (
                        <p className="stats">{stats}</p>
                    ))}
                </div>
                <div>
                    {stats.map((stats)=> (
                        <p className="stats">{stats}</p>
                    ))}
                </div>
            </div>
        </div>
        )}
        <div className="right"
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}
        onClick={modelHandler}
        >
            <img src={image} alt={name} style={{maxHeight:"50px", marginRight:"10px", width:"50px"}}/>
            <p style={{width:"270px"}}>No. {id}</p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball" style={{marginLeft:"auto", width:"40px"}}/>
        </div>
        {modelOpen && (
            <Model 
                id={id}
                name={name}
                image={image}
                height={height}
                weight={weight}
                stats={stats}
                statsName={statsName}
                type={type}
                onClick={closeModelHandler}
            />
        )}
    </div>
  )
}

export default PokemonCard