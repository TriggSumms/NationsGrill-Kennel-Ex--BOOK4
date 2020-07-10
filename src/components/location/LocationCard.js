import React from "react";
import "./Location.css";


const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                <img src={require(`./${props.location.picture}`)} alt="My Location" />
                </picture>
                <h4>
                    Location Name: <span className="card-locationName"> {props.location.name}</span>
                </h4>
                <p><strong>Nashville Neightborhood:</strong>{props.location.address}</p>
                <button type="button" onClick={() => props.deleteLocations(props.location.id)}>Get rid of the location</button>
            </div>
        </div>
    )
}

export default LocationCard;