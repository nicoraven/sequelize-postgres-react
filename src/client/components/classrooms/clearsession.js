/* eslint-disable react/prop-types */
import React from 'react';

import { requestClear } from '../../utils';
import { ClassroomsContext, SetContentContext } from '../../utils/context';
import './stylesheets/clearsession.css';

const CombinedContextConsumer = ({ children }) => (
  <ClassroomsContext.Consumer>
    {updateClassroom => (
      <SetContentContext.Consumer>{setContent => (
        children({ updateClassroom, setContent })
      )}
      </SetContentContext.Consumer>
    )}
  </ClassroomsContext.Consumer>
);

const ClearSession = ({ room }) => {
  const clearReq = async ({ updateClassroom, setContent }) => {
    const cleared = await requestClear(parseInt(room.id));
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
