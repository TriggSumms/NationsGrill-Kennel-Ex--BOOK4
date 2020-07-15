import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

//This functionaility below 


const Kennel = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  

  //hasUser makes sure the crendentials has a value
  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    localStorage.setItem("rememberMe", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  
 


  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;