import React, { useState, useEffect } from 'react';
import './app.css';

import ClassroomContainer from './classrooms/classroomscontainer';
import { EditClassroomsContext, DeleteClassroomContext } from '../utils/context';

const App = () => {
  const [classrooms, setClassrooms] = useState([]);

  const fetchAllClassrooms = async () => {
    const response = await fetch('/api/classrooms');
    const data = await response.json();
    setClassrooms(data.message);
  };

  useEffect(() => {
    fetchAllClassrooms();
  }, []);

  const updateClassroom = (updatedClassroom) => {
    const updatedClassrooms = [...classrooms];
    const id = updatedClassrooms.findIndex(classroom => classroom.id === updatedClassroom.id);
    if (id === -1) {
      updatedClassrooms[updatedClassrooms.length] = updatedClassroom;
    } else {
      updatedClassrooms[id] = updatedClassroom;
    }
    setClassrooms(updatedClassrooms);
  };

  const removeClassroom = (id) => {
    const updatedClassrooms = classrooms.filter(classroom => classroom.id !== id);
    setClassrooms(updatedClassrooms);
  };

  return (
    <div className="app-wrapper">
      <h1>Classroom Placards</h1>
      <DeleteClassroomContext.Provider value={removeClassroom}>
        <EditClassroomsContext.Provider value={updateClassroom}>
          <ClassroomContainer classrooms={classrooms} />
        </EditClassroomsContext.Provider>
      </DeleteClassroomContext.Provider>
    </div>
  );
};

export default App;
