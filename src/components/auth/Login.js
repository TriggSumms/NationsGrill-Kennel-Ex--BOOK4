import React, { useState } from "react"



//What is state and how do i update it?...This handles that and then matches the id with a value in state
const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };



//   This button plugs in those credentials into session login...it is the click event
  const handleLogin = (e) => {
    e.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(credentials)
    );
    //Changed the route to HOME NAV*
    props.history.push("/");
  }


//This is what will display after 

  return (
    <form onSubmit={handleLogin}>
        {/* This is an applied action to the form,  */}
      <fieldset>
        <h3>Nation's Sign In</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;