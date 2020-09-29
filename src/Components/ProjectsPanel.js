import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Moment 
import moment from 'moment';

//TeamsApiURL
const teamsApiUrl = "https://radiant-waters-52080.herokuapp.com";

class ProjectsPanel extends Component {
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
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>

                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((project, index) => {
                                    let activeDate = moment().diff(moment(project.ProjectStartDate),'days');
                                    return (
                                        <tr key={project._id}>
                                            <td>{project.ProjectName}</td>
                                            <td>Active {activeDate} days</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <Link to={{ pathname: '/projects' }}><span className="btn btn-primary form-control">View All Project Data</span></Link>

                </div>
            </div>
        );
    }
}

export default ProjectsPanel;