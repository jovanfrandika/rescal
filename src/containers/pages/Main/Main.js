import React, { useContext } from 'react';

import styles from './Main.module.css';

import Layout from '../../Layout';

import BandSelection from '../../../components/BandSelection';
import BandContext from '../../../BandContext';

import Resistor from '../../../components/Resistor';
import BandTypeSwitch from '../../../components/BandTypeSwitch';

const Main = () => {
  
  const { bands } = useContext(BandContext);
  const bandsProperty = Object.keys(bands);

  let selections = bandsProperty.map((band, index) => <BandSelection key={index} whichBand={band} />);
  console.log(bands);
  return (
      <Layout>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Resistor</h1>
          <div className={styles.resistorContainer}> 
            <Resistor height='8' width='24'/>
          </div>
          <div className={styles.bandSwitch}>
            <BandTypeSwitch />
          </div>
          <div className={styles.selectionContainer}>
            {selections}
          </div>
        </div>
    </Layout>
  )
}

export default Main;