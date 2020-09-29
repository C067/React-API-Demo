import React, { Component } from 'react';

//MainContainer Component 
import MainContainer from './MainContainer';
//Moment
import moment from 'moment';

//TeamsApiURL
const teamsApiUrl = "https://radiant-waters-52080.herokuapp.com";

class Employees extends Component {
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
                //Sort all the Teams 
                employee.sort(function (a, b) { return a._id > b._id; });  
                //Set the State
                this.setState({ employees: employee });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <MainContainer sidebar={this.props.sidebar}>
                <h1 className="page-header">Employees</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name & Position</th>
                                <th>Address</th>
                                <th>Phone Num</th>
                                <th>Hire Date</th>
                                <th>Salary Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee, index) => {
                                //Create a Moment for the HireDate
                                let hireDate = moment(employee.HireDate);
                                //Switch to utc
                                hireDate.utc();

                                return (
                                    <tr key={employee._id}>
                                        <td>{employee.FirstName + " " + employee.LastName + " - " + employee.Position.PositionName}</td>
                                        <td>{employee.AddressStreet + " " + employee.AddressCity + ", " + employee.AddressState + " " + employee.AddressZip}</td>
                                        <td>{employee.PhoneNum + " ex: " + employee.Extension}</td>
                                        <td>{hireDate.format("LL")}</td>
                                        <td>{"$ " + employee.SalaryBonus}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </MainContainer>      
        );
    }
}

export default Employees;