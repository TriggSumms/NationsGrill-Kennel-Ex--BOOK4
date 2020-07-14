import React, { useState, useEffect } from "react"
import Manager from "../../modules/Manager"
import "./AnimalForm.css"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", nickName: "", employeeId: ""});
  const [isLoading, setIsLoading] = useState(false);
  const[employees, setEmployees] = useState([]);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      nickName: animal.nickName,
      picture: animal.picture,
      employeeId: parseInt(animal.employeeId)
    };

    Manager.updateAnimal(editedAnimal)
      .then(() => props.history.push("/animals"))
  }
//Edited this process to pull and tie Employees with Animals...and a select drop down
  useEffect(() => {
    Manager.getAnimal(props.match.params.animalId)
      .then(animal => {
        Manager.getEmployeeAll().then(employees =>{
          setEmployees(employees)
          setAnimal(animal);
           setIsLoading(false);
        })
        
        
      });
  }, [props.match.params.animalId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Bar FRequenter Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="nickName"
              value={animal.nickName}
            />
            <label htmlFor="nickName">Bar nickName</label>
          </div>
          <select
            className="form-control"
            id="employeeId"
            value={animal.employeeId}
            onChange={handleFieldChange}
          >
            {employees.map(employee =>
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            )}
          </select>
          <label htmlFor="employeeId">Employee</label>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit Your Changes</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm