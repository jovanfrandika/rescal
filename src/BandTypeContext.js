import React, { createContext } from 'react';

const BandTypeContext = createContext({
  isFiveBands: false,
  setIsFiveBands: () => {}
});

export default BandTypeContext;