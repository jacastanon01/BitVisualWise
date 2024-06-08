import React from 'react';
import { useAtom } from 'jotai';

import atom_configs from '../atom_configs';
import BitIntWrapper from '../BitIntWrapper';
import BitDisplay from './BitDisplay';
import InputValue from './InputValue';

interface IBitInputsProps {
  inputValues: number[];
  setters: React.Dispatch<React.SetStateAction<number>>[];
}

function BitInputs() {
  return (
    <>
      <section className='flex flex-col items-center'>
        <InputValue name='value' />
        {/* <BitDisplay value_to_convert={bit1} /> */}
      </section>

      <section className='flex flex-col items-center'>
        <InputValue name='otherValue' />
        {/* <BitDisplay value_to_convert={bit2} /> */}
      </section>

      {/* <InputValue value={shiftAmount} onChange={setShiftAmount} /> */}
    </>
  );
}

export default BitInputs;

function InputWrapper() {
  const [value, setValue] = useAtom(atom_configs.valueAtom);
  const [otherValue, setOtherValue] = useAtom(atom_configs.otherValueAtom);
  const [shiftAmount, setShiftAmount] = useAtom(atom_configs.shiftAmountAtom);
  const [operator, setOperator] = useAtom(atom_configs.operatorAtom);
  const [activeInput, setActiveInput] = useAtom(atom_configs.activeInputAtom);
}
