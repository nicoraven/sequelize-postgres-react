/* eslint-disable react/prop-types */
import React from 'react';

import { editClassroom } from '../../utils';
import { CombinedContextConsumer } from '../../utils/context';
import './stylesheets/clearsession.css';

const ClearSession = ({ room }) => {
  const clearReq = async ({ updateClassroom, setContent }) => {
    const cleared = await editClassroom({
      id: room.id,
      sessionId: null
    });
    if (cleared) {
      updateClassroom(cleared);
      setContent();
    } else {
      alert('Error: Please try again later.');
    }
  };

  if (room.session) {
    return (
      <div className="clearsession-child">
        <p className="clearsession-details">Are you sure you want to clear {room.session.name}?</p>
        <div className="confirmation-buttons">
          <CombinedContextConsumer>
            {({ updateClassroom, setContent }) => <button type="button" onClick={() => { clearReq({ updateClassroom, setContent }); }}>Confirm</button>}
          </CombinedContextConsumer>
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
