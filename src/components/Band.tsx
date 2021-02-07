import React, { useContext } from 'react';
import { BandContext, BandContextValue } from '../contexts/BandContext';

import { ColourInterface, colours } from '../constants/colourList';

const Band = () => {
  const { state } = useContext<BandContextValue>(BandContext);
  return (
    <div className='grid grid-cols-5'>
      {
        state.bands.map((value: number, baseIndex: number) => {
          return colours.map(({ label, hexCode }: ColourInterface, childIndex: number) => {
            return (
              <div key={`${label}-${value}-${baseIndex}-${childIndex}`} className='w-4 h-4 rounded-sm' style={{ background: hexCode }} >
              </div>
            )
          })

        })
      }
    </div>
  )
}

export default Band;