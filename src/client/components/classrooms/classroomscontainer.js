/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Classroom from './classroom';

import './classrooms.css';

export default class ClassroomsContainer extends Component {
  clickHandler = () => {
    console.log('hello!');
  }

  render() {
    const { classrooms } = this.props;

    const classroomsList = classrooms.length > 0 ? (
      classrooms.map(room => <Classroom room={room} />)
    ) : (
      <div className="classroom">
        <div className="classroom-content">
          <h4>Add a classroom here.</h4>
        </div>
      </div>
    );

    return (
      <div className="classrooms-container">
        <h2>Classrooms</h2>
        <div className="list-wrapper">
          {classroomsList}
        </div>
      </div>
    );
  }
}
