import React, { createContext } from 'react';

const ClassroomsContext = createContext();

const SetContentContext = createContext();

const CombinedContextConsumer = ({ children }) => (
  <ClassroomsContext.Consumer>
    {updateClassroom => (
      <SetContentContext.Consumer>{setContent => (
        children({ updateClassroom, setContent })
      )}
      </SetContentContext.Consumer>
    )}
  </ClassroomsContext.Consumer>
);

export {
  ClassroomsContext,
  SetContentContext,
  CombinedContextConsumer
};
