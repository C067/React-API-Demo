import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Return the NavBar
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to={{ pathname: '/' }}><span className="navbar-brand">{this.props.title}</span></Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;