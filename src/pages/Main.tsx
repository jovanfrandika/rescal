import React from 'react';

import Layout from '../components/Layout';
import Resistor from '../components/Resistor';
import ResistorValue from '../components/ResistorValue';
import Band from '../components/Band';
import BandSwitch from '../components/BandSwitch';

const Main: React.FC = () => {
  return (
    <Layout>
      <div className='pt-16'>
        <h1 className='font-bold text-7xl text-gray-100 text-center'>Rescal</h1>
        <div className='flex flex-col space-y-12 mx-8 mt-16 p-12 bg-gray-100 border-2 shadow-xl rounded-lg md:mx-64'>
          <div className='flex flex-col items-center py-12 bg-white'>
            <Resistor />
            <ResistorValue />
          </div>
          <BandSwitch />
          <div className='mt-12 bg-gray-300 border-2 shadow-sm rounded-lg'>
            <Band />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Main;