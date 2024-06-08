import React from 'react';

import BitIntWrapper from '../BitIntWrapper';
import BitDisplay from './BitDisplay';
import InputValue from './InputValue';

interface IBitInputsProps {
  inputValues: number[];
  setters: React.Dispatch<React.SetStateAction<number>>[];
}

function BitInputs({ inputValues: values, setters }: IBitInputsProps) {
  const [bit1, bit2] = values.map(
    (bit: number) => new BitIntWrapper(bit).toBinaryString() || '0000'
  );
  const [value, otherValue] = values;
  const [setValue, setOtherValue] = setters;

  return (
    <>
      <section className='flex flex-col items-center'>
        <InputValue value={value} onChange={setValue} />
        <BitDisplay bits={bit1} />
      </section>

      <section className='flex flex-col items-center'>
        <InputValue value={otherValue} onChange={setOtherValue} />
        <BitDisplay bits={bit2} />
      </section>

      {/* <InputValue value={shiftAmount} onChange={setShiftAmount} /> */}
    </>
  );
}

export default BitInputs;
