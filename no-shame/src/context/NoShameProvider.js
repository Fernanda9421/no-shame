import React, { useState } from 'react';
import NoShameContext from './NoShameContext';

function NoShameProvider({ children }) {
  const [size, setSize] = useState('P');

  const context = { size, setSize };

  return (
    <NoShameContext.Provider value={context}>
      { children }
    </NoShameContext.Provider>
  );
};

export default NoShameProvider;
