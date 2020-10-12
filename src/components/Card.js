import React from 'react';


const Card = ({ name, email, id }) => {
  return (
    <div className="bg-hot-pink tc dib br4 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot cards" src={`https://robohash.org/${id}?200x200`}></img>
      <div>
        <h2 className="yellow">{name}</h2>
        <p className="yellow">{email}</p>
      </div>
    </div>
  );
}

export default Card;
