import React from "react";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'
import "./Animal.css";

const AnimalCard = props => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./${props.animal.picture}`)} alt="My Doggie" />
          </picture>
          <h3>
            Frequenter Name: <span className="card-dogname">{firstLetterCase(props.animal.name)}</span>
          </h3>
          <p><strong>Breed:</strong> {props.animal.breed}</p>
          <button type="button" onClick={() => props.deleteAnimals(props.animal.id)}>Get rid of that BadBabi</button>
          <Link to={`/animal/${props.animal.id}`}><button>Lets take a closer look!</button></Link>
        </div>
      </div>
    )
  }

export default AnimalCard;
