/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './classroomcontainer.css';

export default class ClassroomsContainer extends Component {
  clickHandler = () => {
    console.log('hello!');
  }

  render() {
    const { classrooms } = this.props;
    console.log(classrooms);
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

const Classroom = ({ room }) => {
  console.log(room);
  const sessionName = room.session ? room.session.name : 'Vacant';
  return (
    <div key={room.id} className="classroom">
      <div className="classroom-content">
        <div className="classroom-details">
          <h3>{room.name}</h3>
          <p>{sessionName}</p>
        </div>
        <div className="classroom-icons">
          <div className="icon" id="icon-view" alt="view" />
          <div className="icon" id="icon-set" alt="set" />
          <div className="icon" id="icon-clear" alt="clear" />
          <div className="icon" id="icon-settings" alt="settings" />
        </div>
      </div>
    </div>
  );
};
