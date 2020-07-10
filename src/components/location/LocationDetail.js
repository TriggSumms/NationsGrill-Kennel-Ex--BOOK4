import React, { useState, useEffect } from 'react';
import Manager from '../../modules/Manager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "", picture: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from Manager and hang on to the data; put it into state
    Manager.getLocation(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          picture: location.picture
        });
        setIsLoading(true);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    Manager.deleteLocation(props.locationId).then(() =>
      props.history.push("/location")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
            {/* This is diffcult to understand, but an if/else statement is needed in order to run the pictures reference? */}
         {(location.picture === "")? undefined: <img src={require(`./${location.picture}`)} alt="My Location" />}
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Location: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Who needs this venue, delete it!
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;