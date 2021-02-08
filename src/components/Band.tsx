import React, { useContext } from 'react';
import clsx from 'clsx';
import { BandContext, BandContextValue, reducerState } from '../contexts/BandContext';

import { ColourInterface, colours } from '../constants/colourList';

const Band = () => {
  const { state, dispatch } = useContext<BandContextValue>(BandContext);
  const { isFive, bands }: reducerState = state;
  const themes = colours.map((colour) => colour.theme);

  return (
    <div className={clsx('m-1 md:grid md:grid-cols-3', { [`lg:grid-cols-5`]: isFive }, { [`lg:grid-cols-4`]: !isFive })}>
      {
        bands.map((value: number, baseIndex: number) => {
          return (
            <div key={`test ${baseIndex}`} className={clsx('text-center', { [`${themes[value]}`]: true }, { [`hidden`]: !isFive && baseIndex === 2 })}>
              <p className={clsx('font-bold rounded-t-lg', { [`bg-${themes[value]}`]: true })}>
                {
                  isFive || (!isFive && baseIndex < 2) ? baseIndex + 1 :
                    !isFive && baseIndex > 2 ? baseIndex : ''
                }
              </p>
              <div className={clsx('grid grid-cols-12 my-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12')}>
                {
                  colours.map(({ label, hexCode }: ColourInterface, childIndex: number) => {
                    if ((baseIndex < 3 && childIndex > 9) || (!isFive && baseIndex === 2)) return <React.Fragment key={`${label}-${value}-${baseIndex}-${childIndex}`} ></React.Fragment>
                    return (
                      <div
                        key={`${label}-${value}-${baseIndex}-${childIndex}`}
                        className='transition transform w-4 h-4 rounded-sm cursor-pointer hover:-translate-y-1'
                        style={{ background: hexCode }}
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