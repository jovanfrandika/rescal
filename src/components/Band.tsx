import React, { useContext } from 'react';
import { BandContext, BandContextValue } from '../contexts/BandContext';

const Band = () => {
  const { state } = useContext<BandContextValue>(BandContext);
  return (
    <div className='grid grid-cols-5'>
      {
        state.bands.map((value, index) => {
          return (
            <div key={`band-${value}-${index}`} className=''>
              {index}
            </div>
          )
        })
      }
    </div>
  )
}

export default Band;