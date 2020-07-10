import React, { useState } from 'react';
import Manager from '../../modules/Manager';
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
 const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "")
    // || animal.picture ==="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famiquebec.org%2Fwp-content%2Fuploads%2F2018%2F08%2FComing-soon.png&f=1&nofb=1"
    {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      Manager.postAnimal(animal)
        .then(() => props.history.push("/animal"));
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
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
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