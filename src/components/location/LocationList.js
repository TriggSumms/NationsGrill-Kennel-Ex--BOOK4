import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import Manager from '../../modules/Manager';

const LocationList = () => {
  
  const [locations, setLocations] = useState([]);

  const getLocations = () => {

    return Manager.getLocationAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  
  useEffect(() => {
    getLocations();
  }, []);
  const deleteLocations = id => {
    Manager.deleteLocation(id)
      .then(() => Manager.getLocationAll().then(setLocations));
  };
 
  return (
    <div className="container-cards">
      {locations.map(location => 
      <LocationCard key={location.id} location={location} deleteLocations={deleteLocations} />)}
    </div>
  );
};
export default LocationList