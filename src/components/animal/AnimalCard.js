import React from "react";

import "./Animal.css";

const AnimalCard = props => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./${props.animal.picture}`)} alt="My Doggie" />
          </picture>
          <h3>
            Frequenter Name: <span className="card-dogname">{props.animal.name}</span>
          </h3>
          <p><strong>Breed:</strong> {props.animal.breed}</p>
          <button type="button" onClick={() => props.deleteAnimals(props.animal.id)}>Get rid of that BadBabi</button>
        </div>
      </div>
    )
  }

export default AnimalCard;
