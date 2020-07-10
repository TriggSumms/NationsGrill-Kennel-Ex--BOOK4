import React, { useState, useEffect } from 'react';
import Manager from '../../modules/Manager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from Manager and hang on to the data; put it into state
    Manager.getAnimal(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          picture: animal.picture
        });
        setIsLoading(true);
      });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    Manager.deleteAnimal(props.animalId).then(() =>
      props.history.push("/animal")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
            {/* This is diffcult to understand, but an if/else statement is needed in order to run the pictures reference? */}
         {(animal.picture === "")? undefined: <img src={require(`./${animal.picture}`)} alt="My Doggie" />}
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Get rid of this bad boi...4realtho.
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;