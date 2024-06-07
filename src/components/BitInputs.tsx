import React from 'react';

import BitIntWrapper from '../BitIntWrapper';
import BitDisplay from './BitDisplay';
import BitInputBox from './BitInputBox';

interface IBitInputsProps {
  inputValues: { [key: string]: number };
  setters: {
    [key: string]: React.Dispatch<React.SetStateAction<number>>;
  };
  bits: number[];
}

function BitInputs({ inputValues, setters, bits }: IBitInputsProps) {
  const [bit1, bit2] = bits.map((bit: number) => new BitIntWrapper(bit));
  const { value, otherValue, shiftAmount } = inputValues;
  const { setValue, setOtherValue, setShiftAmount } = setters;

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
