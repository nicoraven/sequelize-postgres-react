import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

import ClassroomContainer from './classroomcontainer';

export default class App extends Component {
  state = {
    sessions: [],
    classrooms: []
  };

  componentDidMount() {
    this.fetchAllClassrooms();
  }

  fetchAllClassrooms = () => {
    fetch('/api/classrooms')
      .then(res => res.json())
      .then(classrooms => this.setState({ classrooms }));
  }

  fetchAllSessions = () => {
    fetch('/api/sessions')
      .then(res => res.json())
      .then(sessions => this.setState({ sessions }));
  }

  render() {
    const { classrooms, sessions } = this.state;

    return (
      <div className="app-wrapper">
        <h1>Classroom Placards</h1>
        <ClassroomContainer classrooms={classrooms} />
      </div>
    );
  }
}
