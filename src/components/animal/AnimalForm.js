import React, { useState } from 'react';
import Manager from '../../modules/Manager';
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", nickName: "", picture: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal, picture:"coming soon.png" };
    //Added a default image for testing
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
 const constructNewAnimal = evt => {
  evt.preventDefault();
  if (animal.name === "" || animal.nickName === "" || animal.picture === ""  ) {
     
    window.alert("Please input an frequenter name and nick-name");
  } else {
    setIsLoading(true);
    // Create the animal and redirect user to animal list
    Manager.postAnimal(animal)
      .then(() => props.history.push("/animals"));
  }
};

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Frequenter Name..."
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="nickName"
              placeholder="Nick Name...?"
            />
            <label htmlFor="nickName">Nick Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="picture"
              placeholder="FEATURE IS CURRENTLY UNAVAILABLE"
            />
            <label htmlFor="picture">Web sourced Picture:</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm