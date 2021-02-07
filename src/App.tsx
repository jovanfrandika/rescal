import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import './styles/global.css';
import BandProvider from './contexts/BandContext';
import Main from './pages/Main';

function App() {
  return (
    <BandProvider>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </BandProvider>
  );
}

export default App;
