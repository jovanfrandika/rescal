import React, { useContext } from 'react';
import clsx from 'clsx';
import { BandContext, BandContextValue, reducerState } from '../contexts/BandContext';

import { ColourInterface, colours } from '../constants/colourList';

const Band = () => {
  const { state, dispatch } = useContext<BandContextValue>(BandContext);
  const { isFive, bands }: reducerState = state;

  return (
    <div className={clsx('m-1 md:grid md:grid-cols-3', { [`lg:grid-cols-5`]: isFive }, { [`lg:grid-cols-4`]: !isFive })}>
      {
        bands.map((value: number, baseIndex: number) => {
          return (
            <div key={`test ${baseIndex}`} className={clsx('text-center', { [`hidden`]: !isFive && baseIndex === 2 })}>
              <p className={clsx('font-bold mx-2 bg-white shadow-lg rounded-xl')} >
                {
                  isFive || (!isFive && baseIndex < 2) ? baseIndex + 1 :
                    !isFive && baseIndex > 2 ? baseIndex : ''
                }
              </p>
              <div className={clsx('grid grid-cols-12 my-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12')}>
                {
                  colours.map(({ label, theme }: ColourInterface, childIndex: number) => {
                    if ((baseIndex < 3 && childIndex > 9) || (!isFive && baseIndex === 2)) return <React.Fragment key={`${label}-${value}-${baseIndex}-${childIndex}`} ></React.Fragment>
                    return (
                      <div
                        key={`${label}-${value}-${baseIndex}-${childIndex}`}
                        className={clsx('transition transform w-4 h-4 mx-auto bg-current shadow-lg rounded-sm cursor-pointer ', { [`${theme}`]: true }, 'hover:-translate-y-1')}
                        onClick={() => {
                          let test = state.bands;
                          test[baseIndex] = childIndex;
                          dispatch({ type: 'UPDATE_BAND', value: test })
                        }}
                      >
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div >
  )
}

export default Band;