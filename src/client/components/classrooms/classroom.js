/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Modal from '../modal/modal';
import ClassView from './showdetails';
import './classrooms.css';

const Classroom = ({ room }) => {
  // console.log(room);
  const [show, setShow] = useState(false);
  const sessionName = room.session ? room.session.name : 'Vacant';

  return (
    <div key={room.id} className="classroom">
      <div className="classroom-content">
        <div className="classroom-details">
          <h3>{room.name}</h3>
          <p>{sessionName}</p>
        </div>
        <div className="classroom-icons">
          <div className="icon" id="icon-view" alt="view" role="button" onClick={() => setShow(true)}/>
          <div className="icon" id="icon-set" alt="set" />
          <div className="icon" id="icon-clear" alt="clear" />
          <div className="icon" id="icon-settings" alt="settings" />
        </div>
        <Modal show={show} handleClose={() => setShow(false)}>
          <ClassView room={room} />
        </Modal>
      </div>
    </div>
  );
};

export default Classroom;
