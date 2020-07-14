import React, { useState, useEffect } from 'react';
import Manager from '../../modules/Manager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", nickName: "", picture: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from Manager and hang on to the data; put it into state
    Manager.getAnimal(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          nickName: animal.nickName,
          picture: animal.picture
        });
        setIsLoading(false);
      });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    Manager.deleteAnimal(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

/*~~~~~~>Trying to create a process to attach edit button to just the details section...
   const handleEdit = () => {
    //invoke the edit and update function .
    setIsLoading(true);
    Manager.updateAnimal(props.animalId).then(() =>
    props.history.push(`/animals/${props.animal.id}/edit`)
    );
  }; 
*/


  return (
    <div className="card">
      <div className="card-content">
        <picture>
            {/* This is diffcult to understand, but an if/else statement is needed in order to run the pictures reference? */}
         {animal.picture === "" ? undefined : <img src={require(`./${animal.picture}`)} alt="My Doggie" />}
        </picture>
        <h3>Frequenter Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>nickName: {animal.nickName}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Get rid of this bad boi...4realtho.
        </button>
        {/* <button type="button" disabled={isLoading} onClick={handleEdit}>
          ~Edit the Profile~
        </button> */}
        <button type="button" onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
          ~Edit the Profile~
        </button> 
      </div>
    </div>
  );
}

export default AnimalDetail;

