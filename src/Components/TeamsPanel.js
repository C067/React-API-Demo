import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//TeamsApiUrl
const teamsApiUrl = "https://radiant-waters-52080.herokuapp.com";

class TeamsPanel extends Component {
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
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map((team, index ) => {
                                    return (
                                        <tr key={team._id}>
                                            <td>{team.TeamName}</td>
                                            <td>{team.Employees.length} Employees</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to={{ pathname: '/teams' }}><span className="btn btn-primary form-control">View All Team Data</span></Link>
                </div>
            </div>
        );
    }
}

export default TeamsPanel;