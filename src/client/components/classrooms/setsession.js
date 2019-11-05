import React, { useState, useEffect } from 'react';

import { CombinedContextConsumer } from '../../utils/context';
import { editClassroom } from '../../utils';

const SetSession = ({ room }) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    console.log('selected!', selected);
  }, [selected]);

  const handleSubmit = async (updateClassroom, setContent) => {
    console.log('submitting!', selected);
    if (selected === '') {
      alert('Please select a session first!');
    } else {
      const edited = await editClassroom({
        id: room.id,
        sessionId: selected
      });
      if (edited) {
        updateClassroom(edited);
        setContent();
      } else {
        alert('Error: Please try again later.');
      }
    }
  };

  return (
    <div>
      <h3>Set an active session for room.name</h3>
      <CombinedContextConsumer>{({ updateClassroom, setContent, sessions }) => (
        <div>
          <select defaultValue={selected} onChange={e => setSelected(e.target.value)}>
            <option value="" disabled hidden>Please Choose...</option>
            {sessions.map(session => <option key={session.name} value={session.id}>{session.name}</option>)}
          </select>
          <button type="button" onClick={() => handleSubmit(updateClassroom, setContent)}>Set</button>
        </div>
      )}
      </CombinedContextConsumer>
    </div>
  );
};

export default SetSession;
