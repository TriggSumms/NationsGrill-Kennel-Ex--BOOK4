import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import Manager from '../../modules/Manager';

const OwnerList = () => {
  
  const [owners, setOwners] = useState([]);

  const getOwners = () => {

    return Manager.getOwnerAll().then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };

  
  useEffect(() => {
    getOwners();
  }, []);
  const deleteOwners = id => {
    Manager.deleteOwner(id)
      .then(() => Manager.getOwnerAll().then(setOwners));
  };

 
  return (
    <div className="container-cards">
      {owners.map(owner => 
      <OwnerCard key={owner.id} owner={owner} deleteOwners={deleteOwners} />)}
    </div>
  );
};
export default OwnerList