/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Modal from '../modal/modal';
import ClassView from './ClassView';
import { generateTime } from '../../utils';
import './classrooms.css';

const Classroom = ({ room }) => {
  // console.log(room);
  const [content, setContent] = useState(null);

  const ModalContent = () => (
    <React.Fragment>
      {{
        ClassView: <ClassView room={room} />,
        null: null
      }[content]}
    </React.Fragment>
  );

  const sessionDetails = room.session ? (
    <React.Fragment>
      <h3>{room.name}</h3>
      <p>{room.session.name}</p>
      <p>{generateTime(room.session.timeStart)}  -  {generateTime(room.session.timeEnd)}</p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h3>{room.name}</h3>
      <p>Vacant</p>
    </React.Fragment>
  );

  return (
    <div key={room.id} className="card">
      <div className="card-content">
        <div className="card-details">
          {sessionDetails}
        </div>
        <div className="card-icons">
          <div className="icon" id="icon-view" alt="view" role="button" onClick={() => setContent('ClassView')}/>
          <div className="icon" id="icon-set" alt="set" />
          <div className="icon" id="icon-clear" alt="clear" />
          <div className="icon" id="icon-settings" alt="settings" />
        </div>
        <Modal show={content} handleClose={() => setContent(false)}>
          {ModalContent()}
        </Modal>
      </div>
    </div>
  );
};

export default Classroom;
