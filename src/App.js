import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Main from "./containers/pages/Main/Main";

import BandContext from "./BandContext";
import BandTypeContext from './BandTypeContext';

function App() {
  const [bands, setBands] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  });

  const [isFiveBands, setIsFiveBands] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('resistorCookies')) {
      let objectBands = JSON.parse(localStorage.getItem('resistorCookies'));
      setBands(objectBands);
    }
    if(localStorage.getItem('resistorTypeCookies')) {
      let objectBandType = JSON.parse(localStorage.getItem('resistorTypeCookies'));
      setIsFiveBands(objectBandType); 
    }
  }, [])

  const bandValues= useMemo(() => ({bands, setBands}), [bands, setBands]);
  const typeValue = useMemo(() => ({isFiveBands, setIsFiveBands}), [isFiveBands, setIsFiveBands]);

  return (
    <div className="App">
      <BandTypeContext.Provider value={typeValue} >
        <BandContext.Provider value={bandValues}>
          <Switch>
            <Route exact path="/" component={Main}/> 
          </Switch>
        </BandContext.Provider>
      </BandTypeContext.Provider>
    </div>
  );
    
}

export default App;
