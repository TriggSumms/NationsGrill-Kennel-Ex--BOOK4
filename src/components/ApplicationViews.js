import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Menu from "./Menu/menu";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeDetail from "./employee/EmployeeDetails";
import EmployeeForm from "./employee/EmployeeForm";
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"

// Should I add props into the function below?
//Question: Differences between targetting session/local storage for this project?
const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;
    // const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
    return (
        <React.Fragment>

            {/*NAV BAR HOME/LOGIN ------------------------------------------------------------------------------  */}
            <Route
                exact
                path="/"
                render={(props) => {
                    return <Home />;
                }}
            />
            {/* LOGIN ROUTE */}
            {/* <Route path="/login" component={Login} /> */}
            {/* //pass the `setUser` function to Login component. */}
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props} />
            }} />




            {/*NAV BAR ANIMAL----------------------------------------------------------------------------------- */}

            <Route exact path="/animals" render={(props) => {
                return <AnimalList {...props}
                />
            }} />
            {/* This route has been adjusted to only allow the user to delete the profile.....if logged in */}
            <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                if (hasUser) {
                    return <AnimalDetail
                        animalId={parseInt(props.match.params.animalId)}
                        {...props} />
                } else {
                    return <Redirect to="/login" />

                }
            }}
            />
            <Route path="/animals/new" render={(props) => {
                return <AnimalForm {...props} />
            }}
            />
            {/* This path was added for the editing of the card by a user */}
            <Route path="/animals/:animalId(\d+)/edit" render={props => {
                if (hasUser) {
                    return <AnimalEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />




            {/* NAV BAR Menu----------------------------------------------------------------------------------*/}
            <Route
                exact
                path="/Menu"
                render={(props) => {
                    return <Menu />;
                }}
            />


            {/* NAV BAR LOCATION----------------------------------------------------------------------------------*/}

            <Route exact path="/locations" render={(props) => {
                    return <LocationList {...props}/>
                }}
            />
            <Route path="/location/:locationId(\d+)" render={(props) =>{
                if (hasUser) {
                    return <LocationDetail
                        locationId={parseInt(props.match.params.locationId)}
                        {...props} />
                } else {
                    return <Redirect to="/login" />

                }
            }}
            />


            {/* NAV BAR EMPLOYEE--------------------------------------------------------------------------------- */}

            <Route exact path="/employees" render={(props) => {
                return <EmployeeList {...props} />
            }}
            />
            {/* This route has been adjusted to only allow the user to delete the profile.....if logged in */}
            <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                if (hasUser) {
                    return <EmployeeDetail
                        employeeId={parseInt(props.match.params.employeeId)}
                        {...props} />
                } else {
                    return <Redirect to="/login" />

                }
            }}
            />
            <Route path="/employees/new" render={(props) => {
                return <EmployeeForm {...props} />
            }} />
            {/* This path was added for the editing of the card by a user */}
            <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                if (hasUser) {
                    return <EmployeeEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                return <EmployeeWithAnimals {...props} />
            }} />






            {/* NAV BAR OWNER-------------------------------------------------------------------------------------*/}

            <Route
                path="/owners"
                render={(props) => {
                    return <OwnerList />;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;