/* eslint-disable react/prop-types */
import React from 'react';
import Classroom from './classroom';

import './classrooms.css';

const ClassroomsContainer = ({ classrooms }) => {
  const classroomsList = classrooms.length > 0 ? (
    classrooms.map(room => <Classroom room={room} key={room.name} />)
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
};

export default ClassroomsContainer;
