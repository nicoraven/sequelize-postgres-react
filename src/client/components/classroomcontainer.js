import React, { Component } from 'react';

import './classroomcontainer.css';

export default class ClassroomsContainer extends Component {
  clickHandler = () => {
    console.log('hello!');
  }

  render() {
    const { classrooms } = this.props;
    const classroomsList = classrooms.map(room => <Classroom room={room} />);

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

const Classroom = (room) => {
  const sessionName = room.session ? room.session.name : 'Vacant';
  return (
    <div className="classroom" key={room.id}>
      <div className="classroom-content">
        <h4>{room.name}</h4>
        <p>Current Session: {sessionName}</p>
      </div>
    </div>
  );
};
