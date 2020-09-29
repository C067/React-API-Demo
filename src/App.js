/**************************************************************************************************  
* WEB422 – Assignment04
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Callum Dodge    Student ID: 100229178     Date: October 14, 2019
*
*************************************************************************************************/ 

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

//Overview Component 
import Overview from './Components/Overview';
//Projects Component 
import Projects from './Components/Projects';
//Teams Component 
import Teams from './Components/Teams';
//Employees Component 
import Employees from './Components/Employees';
//NotFound Component 
import NotFound from './Components/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview sidebar="Overview"/>
        )}/>

        <Route exact path='/projects' render={() => (
          <Projects sidebar="Projects"/>
        )}/>

        <Route exact path='/teams' render={() => (
          <Teams sidebar="Teams"/>
        )}/>

        <Route exact path='/employees' render={() => (
          <Employees sidebar="Employees"/>
        )}/>

        <Route render={() => (
          <NotFound sidebar=""/>
        )}/>
      </Switch>
    );
  }
}

export default App;