import React, { useState, useEffect } from "react";
import Manager from "../../modules/Manager";
import "./AnimalSpotlight.css";

const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({ name: "", nickName: "", picture: ""});

  useEffect(() => {
    Manager.getAnimal(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        nickName: animal.nickName,
        picture: animal.picture
      });
    });
  }, [props.animalId]);

  return (
    //   Parent container
    <div className="animal-spotlight">
      {animal.picture === "" ? undefined : <img src={require(`./${animal.picture}`)} alt={animal.name} />}
      <div>
          {/* //Child Container */}
        <h3>{animal.name}</h3>
        <p>{animal.nickName}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;