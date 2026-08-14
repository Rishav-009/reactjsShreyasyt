import React from 'react'

const Card = (props) => {
    return (
      <div className="card">
        <img src={props.image} alt='profile'/>
        <h1>{props.user},{props.gender}</h1>
        <p> who is {props.age} years old</p>
        <button>View Profile</button>
      </div>
  );
};

export default Card;
