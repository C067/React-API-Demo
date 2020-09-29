import React, { Component } from 'react';

//MainContainer Component 
import MainContainer from './MainContainer';
//Moment
import moment from 'moment';

//TeamsApiURL
const teamsApiUrl = "https://radiant-waters-52080.herokuapp.com";

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch(teamsApiUrl + '/projects')
            .then(response => response.json())
            .then(project => {           
                //Sort all the projects 
                project.sort(function (a, b) { return a._id > b._id; });  
                //Set the State
                this.setState({ projects: project });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <MainContainer sidebar={this.props.sidebar}>
                <h1 className="page-header">Projects</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.projects.map((project, index) => {
                                //Create a Moment for Start Date
                                let startDateMoment = moment(project.ProjectStartDate);
                                //Switch the Time
                                startDateMoment.utc();

                                //Create a EndDate Variable
                                let endDate = '';

                                //Compare if the EndDate isn't null
                                if (project.ProjectEndDate !== null) {
                                    //Create a Moment for End Date
                                    endDate = moment(project.ProjectEndDate);
                                    //Switch the Time
                                    endDate.utc();
                                }
                                else {
                                    endDate = 'n/a';
                                }

                                return (
                                    <tr key={project._id}>
                                        <td>{project.ProjectName}</td>
                                        <td>{project.ProjectDescription}</td>
                                        <td>{startDateMoment.format('LL')}</td>
                                        <td>{endDate}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </MainContainer>      
        );
    }
}

export default Projects;