import React, { useState } from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';

import { GetSessionsContext } from '../../utils/context';
import 'react-widgets/dist/css/react-widgets.css';

const SetSession = ({ room }) => {
  return (
    <div>
      <h3>Set an active session for room.name</h3>
      <GetSessionsContext.Consumer>{sessions => (
        <div>
          <DropdownList
            filter
            data={sessions}
          />
        </div>
      )}
      </GetSessionsContext.Consumer>
    </div>
  );
};

export default SetSession;
