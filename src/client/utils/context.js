import React, { createContext } from 'react';

// path: '../../App.js';
const DeleteClassroomContext = createContext();

// path: '../../App.js';
const EditClassroomsContext = createContext();

// path: '../components/classrooms/classroom.js';
const SetContentContext = createContext();

const CombinedContextConsumer = ({ children }) => (
  <EditClassroomsContext.Consumer>{updateClassroom => (
    <DeleteClassroomContext.Consumer>{removeClassroom => (
      <SetContentContext.Consumer>{setContent => (
        children({ updateClassroom, setContent, removeClassroom })
      )}
      </SetContentContext.Consumer>
    )}
    </DeleteClassroomContext.Consumer>
  )}
  </EditClassroomsContext.Consumer>
);

export {
  DeleteClassroomContext,
  EditClassroomsContext,
  SetContentContext,
  CombinedContextConsumer
};
