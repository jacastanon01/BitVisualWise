import { atom } from 'jotai';

import { BitOperationSymbols, IBitInputProps } from 'types/index.ts';
import BitIntWrapper, { performBitOperation } from './BitIntWrapper.ts';

const valueAtom = atom<BitIntWrapper | null>(new BitIntWrapper(0));
const otherValueAtom = atom<BitIntWrapper | null>(new BitIntWrapper(0));
const resultAtom = atom(0);

const operatorAtom = atom<BitOperationSymbols | null>(BitOperationSymbols.AND);

const activeInputAtom = atom<IBitInputProps | null>(null);

// function setActiveInputValues() {
//   const activeInput = atom(activeInputAtom);
//   if (activeInput?.name === name) {
//     if (name === 'value') {
//       setValueAtom(null);
//       console.log({ valueAtom });
//     } else {
//       setOtherValueAtom(null);
//     }
//   }
// }

function createResultsAtom() {
  const baseAtom = atom(0);
  const resultAtom = atom((get) => get(baseAtom));
  const calculateResult = atom(null, (get, set) => {
    const value1 = get(valueAtom);
    const value2 = get(otherValueAtom);
    const operator = get(operatorAtom) ?? BitOperationSymbols.AND;

    if (!value1 || !value2) {
      return;
    }

    const result = performBitOperation(operator, value1, value2);
    set(baseAtom, result.toInt());
  });

  return [resultAtom, calculateResult];
}

export default {
  valueAtom,
  otherValueAtom,
  resultAtom,
  operatorAtom,
  activeInputAtom,
  createResultsAtom,
};
