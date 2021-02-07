import React from 'react';

import Layout from '../components/Layout';
import Resistor from '../components/Resistor';
import Band from '../components/Band';

const Main: React.FC = () => {
  return (
    <Layout>
      <h1 className='text-5xl text-center'>Rescal</h1>
      <div className='bg-gray-100'>
        <Resistor />
        <Band />
      </div>
    </Layout>
  )
}

export default Main;