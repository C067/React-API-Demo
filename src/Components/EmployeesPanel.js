import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//TeamsApiUrl
const teamsApiUrl = "https://radiant-waters-52080.herokuapp.com";

class EmployeesPanel extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        fetch(teamsApiUrl + '/employees')
        .then(response => response.json())
        .then(employee => {
            //Sort the Employee Array
            employee.sort(function (a,b) { return a._id > b._id; });
            //Set the Employees State
            this.setState({ employees: employee });
        })
    }

    render() {
        return (
            <div className="panel panel-default">

                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>

                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.employees.map((employee, index) => {
                                    return (
                                        <tr key={employee._id}>
                                            <td>{employee.FirstName + " " + employee.LastName}</td>
                                            <td>{employee.Position.PositionName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <Link to={{ pathname: '/employees' }}><span className="btn btn-primary form-control">View All Employee Data</span></Link>

                </div>
            </div>
        );
    }
}

export default EmployeesPanel;