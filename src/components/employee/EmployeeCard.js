import React from "react";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'
import "./Employee.css";

const EmployeeCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
            <picture>
            <img src={require(`./${props.employee.picture}`)} alt={props.employee.name} />
            </picture>
                <h4>
                Name : <span className="card-employeeName">{firstLetterCase(props.employee.name)}</span>
                </h4>
                <p><strong>Nation's Team Position:</strong>{props.employee.position}</p>
                {/* <button type="button" onClick={() => props.deleteEmployees(props.employee.id)}>Fire EM!</button> */}
                <Link to={`/employees/${props.employee.id}`}><button>Lets take a closer look!</button></Link>
                <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
                Edit the Employee
                </button>
                <button type="button"
        onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Employee Task(s)</button>
            </div>
        </div>
    )

}

export default EmployeeCard;