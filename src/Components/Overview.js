import React, { Component } from 'react';

//MainContainer Component 
import MainContainer from './MainContainer';
//ProjectsPanel Component 
import ProjectsPanel from './ProjectsPanel';
//TeamsPanel Component 
import TeamsPanel from './TeamsPanel';
//EmployeesPanel Component 
import EmployeesPanel from './EmployeesPanel';

class Overview extends Component {
  render() {
    return (
        <MainContainer sidebar={this.props.sidebar}>
          <h1 className="page-header">Overview</h1>
          <div className="row">

            <div className="col-md-4">
              <ProjectsPanel title="Projects" />
            </div>

            <div className="col-md-4">
              <TeamsPanel title="Teams" />
            </div>

            <div className="col-md-4">
              <EmployeesPanel title="Employees" />
            </div>
            
          </div>
        </MainContainer>      
    );
  }
}

export default Overview;