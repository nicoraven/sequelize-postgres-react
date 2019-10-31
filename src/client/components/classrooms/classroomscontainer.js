/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Classroom from './classroom';
import Modal from '../modal/modal';
import AddClassroom from './addClassroom';

import './stylesheets/classrooms.css';

const ClassroomsContainer = ({ classrooms }) => {
  const [addClassroom, setAddClassroom] = useState(false);

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
      <div className="header-container">
        <h2 className="classrooms-header">Classrooms</h2>
        <button id="add-classroom-button" type="button" title="Add new classroom" onClick={() => setAddClassroom('ClassView')} />
        <Modal show={addClassroom} handleClose={() => setAddClassroom(false)}>
          <AddClassroom handleClose={() => setAddClassroom(false)} />
        </Modal>
      </div>
      <div className="list-wrapper">
        {classroomsList}
      </div>
    </div>
  );
};

export default ClassroomsContainer;
