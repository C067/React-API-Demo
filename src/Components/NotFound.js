import React, { Component } from 'react';

//MainContainer Component 
import MainContainer from './MainContainer';

class NotFound extends Component {
    render() {
        return (
            <MainContainer sidebar={this.props.sidebar}>
                <h1 className="page-header">Not Found</h1>
                <span>Page Not Found</span>
            </MainContainer>      
        );
    }
}

export default NotFound;