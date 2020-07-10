import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from "./animal/AnimalForm";



// Should I add props into the function below?
const ApplicationViews = () => {
    return (
        <React.Fragment>
            {/*NAV BAR HOME  */}
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />

            {/*NAV BAR ANIMAL */}
            <Route exact path="/animal" render={(props) => {
                return <AnimalList {...props} />
            }}
            />
            <Route path="/animal/:animalId(\d+)" render={(props) => {
                return <AnimalDetail
                    animalId={parseInt(props.match.params.animalId)}
                    {...props} />
            }}
            />
            <Route path="/animal/new" render={(props) => {
                return <AnimalForm {...props} />
            }} />

            {/* NAV BAR LOCATION */}
            <Route
                exact path="/location"
                render={(props) => {
                    return <LocationList />;
                }}
            />
            <Route path="/location/:locationId(\d+)" render={(props) => {
                return <LocationDetail
                    locationId={parseInt(props.match.params.locationId)}
                    {...props} />
            }}
            />

            {/* NAV BAR EMPLOYEE */}
            <Route
                path="/employee"
                render={props => {
                    return <EmployeeList />;
                }}
            />

            {/* NAV BAR OWNER */}
            <Route
                path="/owner"
                render={props => {
                    return <OwnerList />;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;