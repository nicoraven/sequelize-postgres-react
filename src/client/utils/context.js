import React, { createContext } from 'react';

// path: '../../App.js';
const DeleteClassroomContext = createContext();

// path: '../../App.js';
const EditClassroomsContext = createContext();

// path: '../components/classrooms/classroom.js';
const SetContentContext = createContext();

// path: '../../App.js';
const GetSessionsContext = createContext();

const CombinedContextConsumer = ({ children }) => (
  <EditClassroomsContext.Consumer>{updateClassroom => (
    <DeleteClassroomContext.Consumer>{removeClassroom => (
      <SetContentContext.Consumer>{setContent => (
        <GetSessionsContext.Consumer>{sessions => (
          children({ updateClassroom, setContent, removeClassroom, sessions })
        )}
        </GetSessionsContext.Consumer>
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
  GetSessionsContext,
  CombinedContextConsumer
};
