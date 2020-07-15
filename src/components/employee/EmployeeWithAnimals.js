import React, { useState, useEffect } from 'react'
import Manager from '../../modules/Manager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    Manager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
  }, []);

/*   const deleteAnimals = id => {
    Manager.deleteAnimal(id)
      .then(() => Manager.getAnimalAll().then(setAnimals));
  }; */

  return (
    <div className="card">
      <p> {employee.name}... has been asked to watch these locals this weekend:</p>
      <p className="Employee__RascalList">Local Rascal List: </p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;