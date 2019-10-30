import React, { useState, useEffect } from 'react';
import './app.css';

import ClassroomContainer from './classrooms/classroomscontainer';

const App = () => {
  const [classrooms, setClassrooms] = useState([]);

  const fetchAllClassrooms = async () => {
    const response = await fetch('/api/classrooms');
    const data = await response.json();
    setClassrooms(data);
  };

  useEffect(() => {
    fetchAllClassrooms();
  }, []);

  return (
    <div className="app-wrapper">
      <h1>Classroom Placards</h1>
      <ClassroomContainer classrooms={classrooms} />
    </div>
  );
};

export default App;
