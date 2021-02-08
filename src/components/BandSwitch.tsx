import React, { useContext } from 'react';
import clsx from 'clsx';
import { BandContext, BandContextValue, reducerState } from '../contexts/BandContext';

const BandSwitch = () => {
  const { state, dispatch } = useContext<BandContextValue>(BandContext);
  const { isFive }: reducerState = state;
  return (
    <div className={clsx('transition transform mx-auto px-4 py-1 bg-gray-300 border-2 border-gray-100 shadow-lg rounded-3xl hover:-translate-y-1', { [`bg-blue-400`]: isFive }, { [`bg-yellow-200`]: !isFive })}>
      <div
        className={clsx('transition transform flex justify-center items-center w-6 h-6 shadow-xl rounded-xl border-2 border-gray-100 bg-white cursor-pointer', { [`-translate-x-3`]: isFive }, { [`translate-x-3`]: !isFive })}
        onClick={() => { dispatch({ type: "UPDATE_BAND_TYPE", value: !isFive }) }}
      >
        <p className=''> {isFive ? 5 : 4} </p>
      </div>
    </div>
  )
}

export default BandSwitch;