import React, { useState, useEffect } from 'react';
import Manager from '../../modules/Manager';
import './EmployeeDetails.css'

const EmployeeDetails = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", picture: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from Manager and hang on to the data; put it into state
    Manager.getEmployee(props.employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          position: employee.position,
          picture: employee.picture
        });
        setIsLoading(false);
      });
  }, [props.employeeId]);

  const handleDelete = () => {
    //invoke the delete function  and re-direct to the  list.
    setIsLoading(true);
    Manager.deleteEmployee(props.employeeId).then(() =>
      props.history.push("/employees")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
            {/* This is diffcult to understand, but an if/else statement is needed in order to run the pictures reference? */}
         {employee.picture === "" ? undefined : <img src={require(`./${employee.picture}`)} alt="My employee" />}
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
        <h3>Position: </h3><p>{employee.position}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Time to get rid of this guy, he stole freezer cheeses AGAIN!
        </button>
      </div>
    </div>
  );
}

export default EmployeeDetails;