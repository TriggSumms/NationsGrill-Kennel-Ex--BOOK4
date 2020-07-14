import React, { useState } from 'react';
import Manager from '../../modules/Manager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", picture: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee, picture:"downloadofsmiles.jpg"};
    //Added a default image for testing
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
 const constructNewEmployee = evt => {
  evt.preventDefault();
  if (employee.name === "" || employee.position === "" || employee.picture === ""  ) {
     
    window.alert("Please input all the info on your employee");
  } else {
    setIsLoading(true);
    // Create the animal and redirect user to animal list
    Manager.postEmployee(employee)
      .then(() => props.history.push("/employees"));
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
              placeholder="Employee name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="position"
              placeholder="Position"
            />
            <label htmlFor="position">Position</label>
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
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm