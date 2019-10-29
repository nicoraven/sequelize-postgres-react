/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';

import './classrooms.css';

const ClassroomDetails = ({ room }) => {
  const goFullscreen = (e) => {
    // console.log("clicked", e.target.parentNode.id)
    const elem = e.target.parentNode;
    if (!document.fullscreenElement) {
      // eslint-disable-next-line no-alert
      elem.requestFullscreen().catch(err => (
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      ));
    } else {
      document.exitFullscreen();
    }
  };

  if (room.session) {
    return (
      <div className="modal-child">
        {room.name}
        <button id="fullscreen-button" type="button" onClick={e => goFullscreen(e)}>Fullscreen</button>
      </div>
    );
  } else {
    return (
      <div className="modal-child">
        {room.name}
        <p>Vacant</p>
        <button id="fullscreen-button" type="button" onClick={e => goFullscreen(e)}>Fullscreen</button>
      </div>
    );
  }
};

export default ClassroomDetails;
