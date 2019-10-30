/* eslint-disable react/prop-types */
import React from 'react';

import { ModalConsumer } from '../../utils/modalcontext';
import './clearsession.css';

const ClearSession = ({ room }) => {
  if (room.session) {
    return (
      <div className="clearsession-child">
        <p className="clearsession-details">Are you sure you want to clear {room.session.name}?</p>
        <ModalConsumer>{context => <p>{context}</p>}</ModalConsumer>
        <div className="confirmation-buttons">
          <button type="button">Confirm</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="clearsession-child">
        <p className="clearsession-details">The classroom is already vacant!</p>
      </div>
    );
  }
};

export default ClearSession;
