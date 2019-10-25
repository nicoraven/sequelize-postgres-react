/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './classrooms.css';

class ClassroomDetails extends Component {
  goFullscreen = (e) => {
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
  }

  render() {
    const { room } = this.props;

    return (
      <div id="dah-bodie">
        {room.name}
        <button type="button" onClick={(e) => { this.goFullscreen(e); }}>Enter Fullscreen display mode</button>
      </div>
    );
  }
}

export default ClassroomDetails;
