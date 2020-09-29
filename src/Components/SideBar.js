import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
                <li className={(this.props.highlight === "Overview" ? 'active' : '')}><Link to={{ pathname: '/' }}>Overview <span className="sr-only">(current)</span></Link></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li className={(this.props.highlight === "Projects" ? 'active' : '')}><Link to={{ pathname: '/projects' }}>Projects</Link></li>
                <li className={(this.props.highlight === "Teams" ? 'active' : '')}><Link to={{ pathname: '/teams' }}>Teams</Link></li>
                <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to={{ pathname: '/employees' }}>Employees</Link></li>
              </ul>
            </div>
        );
    }
}

export default SideBar;