import React, { useState } from 'react';
import { EditClassroomsContext } from '../../utils/context';
import { addClassroom } from '../../utils';

const AddClassroom = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const changeHandler = e => setName(e.target.value);

  const submitHandler = async (updateClassroom) => {
    if (name.trim().length > 0) {
      console.log('submitting!', name.trim());
      const newClassroom = await addClassroom({ name: name.trim() });
      if (newClassroom) {
        console.log('completed!', newClassroom);
        updateClassroom(newClassroom);
        setName('');
      } else {
        console.log('error 500!');
        alert('Internal Server Error: Please try again later.');
      }
    } else {
      setShow(true);
    }
  };

  const closeHandler = () => {
    setName('');
    if (show) { setShow(false); }
    handleClose();
  };

  const keyDownHandler = (e, updateClassroom) => { if (e.keyCode === 13) { submitHandler(updateClassroom); } };

  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <div className="addclassroom-container">
      <h3>Create a new classroom</h3>
      <EditClassroomsContext.Consumer>
        {updateClassroom => (
          <div className="form">
            <p className={`validation-message ${showHideClassName}`}>Please provide a name!</p>
            <input type="text" placeholder="Classroom name" value={name} onChange={e => changeHandler(e)} onKeyDown={e => keyDownHandler(e, updateClassroom)} />
            <button type="button" title="Create classroom" onClick={() => submitHandler(updateClassroom)}>Create</button>
            <button type="button" title="Cancel" onClick={() => closeHandler()}>Cancel</button>
          </div>
        )}
      </EditClassroomsContext.Consumer>
    </div>
  );
};

export default AddClassroom;
