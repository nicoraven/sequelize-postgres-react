/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';

import { generateTime } from '../../utils';
import './stylesheets/classview.css';

const ClassroomDetails = ({ room }) => {
  const goFullscreen = (e) => {
    // console.log("clicked", e.target.parentNode.id)
    const elem = e.target.parentNode;
    if (!document.fullscreenElement) {
      // eslint-disable-next-line no-alert
      elem.classList.add('fullscreen');
      elem.requestFullscreen().catch(err => (
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      ));
    } else {
      document.exitFullscreen();
      elem.classList.remove('fullscreen');
    }
  };

  if (room.session) {
    return (
      <div className="classview-child">
        <h1 className="session-name">{room.session.name}</h1>
        <div className="line" />
        <h2 className="session-details">{room.name.toUpperCase()}</h2>
        <h2 className="session-details">{room.session.instructor}</h2>
        <h2 className="session-details">{generateTime(room.session.timeStart)}  -  {generateTime(room.session.timeEnd)}</h2>
        <button id="fullscreen-button" type="button" onClick={e => goFullscreen(e)}>Fullscreen</button>
      </div>
    );
  } else {
    return (
      <div className="classview-child">
        <h1 className="session-name">Vacant</h1>
        <div className="line" />
        <h2 className="session-details">{room.name.toUpperCase()}</h2>
        <button id="fullscreen-button" type="button" onClick={e => goFullscreen(e)}>Fullscreen</button>
      </div>
    );
  }
};

export default ClassroomDetails;
