import React from 'react';

import BitIntWrapper from '../BitIntWrapper';
import BitDisplay from './BitDisplay';
import BitInputBox from './BitInputBox';

interface IBitInputsProps {
  inputValues: number[];
  setters: React.Dispatch<React.SetStateAction<number>>[];
}

function BitInputs({ inputValues: values, setters }: IBitInputsProps) {
  const [bit1, bit2] = values.map((bit: number) => new BitIntWrapper(bit));
  const [value, otherValue, shiftAmount] = values;
  const [setValue, setOtherValue, setShiftAmount] = setters;

  return (
    <>
      <BitInputBox label='Value' value={value} onChange={setValue} />
      <BitDisplay label='Bits' bitWrapper={bit1} />
      <BitInputBox
        label='Other Value'
        value={otherValue}
        onChange={setOtherValue}
      />
      <BitDisplay label='Other Bits' bitWrapper={bit2} />
      <BitInputBox
        label='Shift Amount'
        value={shiftAmount}
        onChange={setShiftAmount}
      />
    </>
  );
}

export default BitInputs;
