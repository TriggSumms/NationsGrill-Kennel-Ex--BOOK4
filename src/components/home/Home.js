
import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import Manager from "../../modules/Manager";
import "./home.css";


const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    Manager.getRandomAnimalId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
        <>
            <div className="address__container">

                <br />
            <h1 className="fact__collection">
                    <strong className="fact__collectionEnhanced">Address:</strong> 705 51st Ave N, Nashville, TN 37209
            <br />
                    <strong className="fact__collectionEnhanced">Phone:</strong> +1 615 873 4755
            <br />
                    <strong className="fact__collectionEnhanced">Hours:</strong> Open · Closes 2AM
                Hours may not reflect changes made due to Covid-19
            </h1>
            </div>
            <div className="animal-spotlight__container">
                <h1 className="spotlight__h1">Local Spotlight</h1>
                <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
                {
                    spotlightId && <AnimalSpotlight animalId={spotlightId} />
                    // This is a conditional statement, its an alternative too tertianary statement...(Need to look into)
                }
            </div>
        </>
    );
};

export default Home;