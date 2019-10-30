/* eslint-disable react/prop-types */
import React from 'react';

import { ModalConsumer } from '../../utils/modalcontext';
import './clearsession.css';

const ClearSession = ({ room }) => {
  const clearReq = () => {
    console.log('send req!');
  };

  if (room.session) {
    return (
      <div className="clearsession-child">
        <p className="clearsession-details">Are you sure you want to clear {room.session.name}?</p>
        <div className="confirmation-buttons">
          <ModalConsumer>
            {/* {f => <p>{f}</p>} */}
            {f => <button type="button" onClick={() => { clearReq(); f(); }}>Confirm</button>}
          </ModalConsumer>
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
