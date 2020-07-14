import React from "react";
import "./home.css";

const Home = () => {
    return (
        <address className="address__container">
            
            <br />
            <h1 className ="fact__collection">
            <strong className="fact__collectionEnhanced">Address:</strong> 705 51st Ave N, Nashville, TN 37209
            <br />
            <strong className="fact__collectionEnhanced">Phone:</strong> +1 615 873 4755
            <br />
            <strong className="fact__collectionEnhanced">Hours:</strong> Open · Closes 2AM
Hours may not reflect changes made due to Covid-19
            </h1>
        </address>
    );
};

export default Home;