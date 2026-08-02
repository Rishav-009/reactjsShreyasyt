import React from "react"
import { Bookmark } from "lucide-react"

const Card = (props) => {
  return (
    <div>
      <div className="card" >
        <div className='top'>
            <img className="logo" src={props.logo} alt='profile'/>
            <button>Save <Bookmark size={18} /></button>
        </div>
        <div className='center'>
            <div className='company-days'>
                <h3>{props.company}</h3>
                <h4>{props.posted}</h4>
            </div>
            <div className="posn">
                <h2>{props.role}</h2>
            </div>
            <div className="type">
                <span className="t1">{props.type}</span>
                <span className="t2">{props.level}</span>
            </div>
            
        </div>
        <div className="bottom">
            <div className="pay-location">
                <div className="pay">
                    <p>{props.pay}</p>
                </div>
                <div className="loc">
                    <p>{props.location}</p>
                </div>
                
            </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
