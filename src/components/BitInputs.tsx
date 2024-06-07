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
  const [value, otherValue, shiftAmount] = values;
  const [setValue, setOtherValue, setShiftAmount] = setters;

  return (
    <>
      <InputValue label='Value' value={value} onChange={setValue} />
      <div>
        <BitDisplay label='Bits' bits={bit1} />
      </div>

      <InputValue
        label='Other Value'
        value={otherValue}
        onChange={setOtherValue}
      />
      <div>
        <BitDisplay label='Other Bits' bits={bit2} />
      </div>

      <InputValue
        label='Shift Amount'
        value={shiftAmount}
        onChange={setShiftAmount}
      />
    </>
  );
}

export default BitInputs;
