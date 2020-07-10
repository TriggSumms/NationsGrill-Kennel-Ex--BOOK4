import React from "react";


const OwnerCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                <img src={require(`./${props.owner.picture}`)} alt="The Owner" />
                </picture>
                <h4>
                Management of this petShop turned Bar: <span className="card-ownerName">{props.owner.name}</span>
                </h4>
                <p><strong>Quote to live by:</strong>{props.owner.quote} </p>
                <button type="button" onClick={() => props.deleteOwners(props.owner.id)}>Remove the Owner!</button>
            </div>
        </div>
    )
}


export default OwnerCard;