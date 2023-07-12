import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./CatCard.scss"



function CatCard({item}) {
const navigate = useNavigate()

const handleClick =  ()=>{
    navigate(`gigs?cat=${item.cat}`)
}
  return (
    //<Link to="/gigs?cat=design">
    <div className='catCard' >
        <img src={item.img} alt ="" onClick={handleClick}/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>  

        </div>
      //  </Link>
    
  )
}

export default CatCard