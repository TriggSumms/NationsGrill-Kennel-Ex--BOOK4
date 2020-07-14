import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import Manager from '../../modules/Manager';

const EmployeeList = (props) => {
  
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {

    return Manager.getEmployeeAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  
  useEffect(() => {
    getEmployees();
  }, []);
  // Delete Functionality, due to my Manager.js....naming conventions were changed 
  const deleteEmployees = id => {
    Manager.deleteEmployee(id)
      .then(() => Manager.getEmployeeAll().then(setEmployees));
  };


return (
  <>
<section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/employees/new")}}>
      Add a Bar Employee
  </button>
  </section>
 <div className="container-cards">
      {employees.map(employee => 
      <EmployeeCard key={employee.id} employee={employee} deleteEmployees={deleteEmployees} {...props}/>)}
    </div>
  </>
  );
  
};

export default EmployeeList