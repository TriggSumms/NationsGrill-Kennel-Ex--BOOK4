import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                <img src={require(`./${props.employee.picture}`)} alt="My Employee" />
                </picture>
                <h4>
                Employee Name : <span className="card-employeeName">{props.employee.name}</span>
                </h4>
                <p><strong>{props.employee.position}</strong></p>
                <button type="button" onClick={() => props.deleteEmployees(props.employee.id)}>Fire EM!</button>
            </div>
        </div>
    )

}

export default EmployeeCard;