# React API Demo
* REST API Link: https://radiant-waters-52080.herokuapp.com

React API Demo is a web application created from the React framework. This applcation collects data from a REST API hosted on a MongoDB database. This application allows us to collect all information from the /employees, /teams, and /projects endpoints.

## Run the Application
1. Download or Clone the Repo
2. Run the command `npm install` to install all dependencies
3. Run the command `npm start` to open the application

## Employees
When the Employees page is loaded successfully, the componentDidMount() function will be called to fetch all employees from the API. Employee information including; full name, job position, address, phone number, hire date, and salary bonus will be displayed to the user in a table format.
* Route used: https://radiant-waters-52080.herokuapp.com/employees

## Teams
When the Teams page is loaded successfully, the componentDidMount() function will be called to fetch all teams from the API. Each team returned from the API will display the following information to the user; team name, name of each project the team is working on, the amount of employees working for the team, and the team's leader.
* Route used: https://radiant-waters-52080.herokuapp.com/teams

## Projects
When the Projects page is loaded successfully, the componentDidMount() function will be called to fetch all projects from the API. Each project returned from the API will display the following information to the user; the name of the project, a quick description of the project, start date of the project, and the end of the project.
* Route used: https://radiant-waters-52080.herokuapp.com/projects
