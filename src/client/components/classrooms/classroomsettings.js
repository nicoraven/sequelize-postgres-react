import React, { useState } from 'react';

import { editClassroom, deleteClassroom } from '../../utils';
import { CombinedContextConsumer } from '../../utils/context';

const ClassroomSettings = ({ room }) => {
  const [roomName, setName] = useState(room.name);

  const changeHandler = e => setName(e.target.value);

  const submitHandler = async (updateClassroom) => {
    console.log('editing name!', roomName.trim());
    const edited = await editClassroom({
      id: room.id,
      name: roomName.trim()
    });
    if (edited) {
      updateClassroom(edited);
    } else {
      alert('Error: Please try again later.');
    }
  };

  const keyDownHandler = (e, updateClassroom) => { if (e.keyCode === 13) { submitHandler(updateClassroom); } };

  const deleteHandler = async (removeClassroom) => {
    console.log('deleting!');

    const deleted = await deleteClassroom(room.id);
    if (deleted) {
      removeClassroom(room.id);
    } else {
      alert('Error: Please try again later.');
    }
  };

  return (
    <div>
      <h3>Edit Classroom</h3>
      <CombinedContextConsumer>
        {({ updateClassroom, setContent, removeClassroom }) => (
          <div className="form">
            <input type="text" placeholder="Edit classroom name" value={roomName} onChange={e => changeHandler(e)} onKeyDown={e => keyDownHandler(e, updateClassroom, setContent)} />
            <button type="button" title="Save" onClick={() => submitHandler(updateClassroom)}>Save</button>
            <button type="button" title="Cancel" onClick={() => setContent()}>Cancel</button>
            <button type="button" title="Delete" onClick={() => deleteHandler(removeClassroom)}>Delete</button>
          </div>
        )}
      </CombinedContextConsumer>
    </div>
  );
};

export default ClassroomSettings;
