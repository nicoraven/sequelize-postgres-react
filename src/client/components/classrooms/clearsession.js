/* eslint-disable react/prop-types */
import React from 'react';

import { Consumer as DataConsumer, requestClear } from '../../utils';
import './clearsession.css';

const ClearSession = ({ room }) => {
  const clearReq = async (handleClose) => {
    const cleared = await requestClear(parseInt(room.id));
    if (cleared) {
      handleClose();
    } else {
      alert('Error: Please try again later.');
    }
  };

  if (room.session) {
    return (
      <div className="clearsession-child">
        <p className="clearsession-details">Are you sure you want to clear {room.session.name}?</p>
        <div className="confirmation-buttons">
          <DataConsumer>
            {handleClose => <button type="button" onClick={() => { clearReq(handleClose); console.log(handleClose); }}>Confirm</button>}
          </DataConsumer>
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
