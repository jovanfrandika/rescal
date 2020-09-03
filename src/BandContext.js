import { createContext } from 'react';

const BandContext = createContext({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
  setBands: () => {}
});

export default BandContext;