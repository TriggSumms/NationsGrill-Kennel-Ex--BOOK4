import React, { useState, useEffect } from "react"
import Manager from "../../modules/Manager"
import "./EmployeeForm.css"

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", position: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      position: employee.position,
      picture: employee.picture
    };

    Manager.updateEmployee(editedEmployee)
      .then(() => props.history.push("/employees"))
  }

  useEffect(() => {
    Manager.getEmployee(props.match.params.employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

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
              value={employee.name}
            />
            <label htmlFor="name">Nations Employee Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="position"
              value={employee.position}
            />
            <label htmlFor="nickName">Employee Position</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit Your Changes</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm