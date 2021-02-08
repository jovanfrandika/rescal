import React, { useState, useContext, useEffect, useCallback } from 'react';
import { bandCode } from '../constants/colourList';
import { BandContext, BandContextValue, reducerState } from '../contexts/BandContext';

const unitConvertion = (input: number) => {

  let units = ['', 'K', 'M', 'G'];
  for (let i = 3; i > 0; i--) {
    if (input % Math.pow(10, i * 3) < 1) return String(input / Math.pow(10, i * 3)) + units[i];
  }

  return String(input.toFixed(2));

}

const ResistorValue: React.FC = () => {
  const { state } = useContext<BandContextValue>(BandContext);
  const { isFive, bands }: reducerState = state;
  const [value, setValue] = useState<string>('');


  const handleValue = useCallback(() => {
    let i: number;
    let pure: string = '';
    for (i = 0; i <= 4; i++) {
      if (!isFive && i === 3) continue;
      else if (i <= 2) pure += String(bands[i]);
      else if (i === 3 && bands[i] < 10) pure = unitConvertion(Number(pure) * Math.pow(10, bands[i]));
      else if (i === 3 && bands[i] >= 10) pure = unitConvertion(Number(pure) * Math.pow(10, 9 - bands[i]));
      else if (i === 4) pure += ' Ω ' + bandCode[bands[i]].tolerance;
    }
    setValue(pure);
  }, [bands, isFive])

  useEffect(() => {
    handleValue();
  }, [state, handleValue]);

  return (
    <div className='px-2 border-2 border-gray-100 bg-white shadow-xl rounded-lg'>
      {value}
    </div>
  )
}

export default ResistorValue;