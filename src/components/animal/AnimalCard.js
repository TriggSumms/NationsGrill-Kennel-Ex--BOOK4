import React from "react";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'
import "./Animal.css";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
            {/* <img src={require(`./${props.animal.picture}`)} alt="My Doggie" />  */}
        </picture>
        {/* maybe change the alt to display the .name */}
        <h3>
          Frequenter Name: <span className="card-dogname">{firstLetterCase(props.animal.name)}</span>
        </h3>
        <p><strong>Nick Name:</strong> {props.animal.nickName}</p>
        {/* <button type="button" onClick={() => props.deleteAnimals(props.animal.id)}>
        Get rid of that BadBabi
        </button> */}
       <button type="button" onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
          ~Edit the Profile~
        </button> 
        <Link to={`/animals/${props.animal.id}`}><button>Lets take a closer look!</button></Link>
      </div>
    </div>
  )
}

export default AnimalCard;