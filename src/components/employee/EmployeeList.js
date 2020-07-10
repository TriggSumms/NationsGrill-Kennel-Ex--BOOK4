import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import Manager from '../../modules/Manager';

const EmployeeList = () => {
  
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
    <div className="container-cards">
      {employees.map(employee => 
      <EmployeeCard key={employee.id} employee={employee} deleteEmployees={deleteEmployees}/>)}
    </div>
  );
};
export default EmployeeList