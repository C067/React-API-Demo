import React, { Component } from 'react';

//MainContainer Component 
import MainContainer from './MainContainer';

//TeamsApiURL
const teamsApiUrl = "https://radiant-waters-52080.herokuapp.com";

class Teams extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        fetch(teamsApiUrl + '/teams')
            .then(response => response.json())
            .then(team => {           
                //Sort all the Teams 
                team.sort(function (a, b) { return a._id > b._id; });  
                //Set the State
                this.setState({ teams: team });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <MainContainer sidebar={this.props.sidebar}>
                <h1 className="page-header">Teams</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Projects</th>
                                <th>Employees</th>
                                <th>TeamLead</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.map((team, index) => {
                                //Sort all Projects in Teams
                                team.Projects.sort(function (a, b) { return a._id > b._id; }); 
                                return (
                                    <tr key={team._id}>
                                        {/*Name*/}
                                        <td>{team.TeamName}</td>

                                        {/*Projects*/}
                                        <td>
                                            <ul>
                                                {/*Loop through all Projects and display each Project Name*/}
                                                {team.Projects.map((project, index) => {
                                                    return (
                                                        <li key={project._id}>{project.ProjectName}</li>                                                
                                                    );
                                                })}
                                            </ul>
                                        </td>

                                        {/*# of Employees*/}
                                        <td>{team.Employees.length} Employees</td>

                                        {/*TeamLead*/}
                                        <td>{team.TeamLead.FirstName + " " + team.TeamLead.LastName}</td>

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

export default Teams;