import React, { useContext } from 'react';

import Layout from '../Layout';

import BandSelection from '../../components/BandSelection';
import BandContext from '../../BandContext';

import Resistor from '../../components/Resistor';

const Main = () => {
  
  const { bands } = useContext(BandContext);
  let resistorStyle = {
  
  }
  
  let selectionContainer = {
    display: 'flex',
    flexDirection: 'row',
  }

  return (
      <Layout>
        <div className={resistorStyle}> 
          <p>{bands ? JSON.stringify(bands) : null}</p> 
          <Resistor height='8' width='24'/>
        </div>
        {console.log(window.innerHeight)}
        <div style={selectionContainer}>
          <BandSelection whichBand='first'/>
          <BandSelection whichBand='second'/>
          <BandSelection whichBand='third'/>
          <BandSelection whichBand='fourth'/>
          <BandSelection whichBand='fifth'/>
        </div>
    </Layout>
  )
}

export default Main;