import { atom } from 'jotai';

import { BitOperationSymbols, IBitInputProps } from 'types/index.ts';
import BitIntWrapper, { performBitOperation } from './BitIntWrapper.ts';

const valueAtom = atom<BitIntWrapper | null>(new BitIntWrapper(0));
const otherValueAtom = atom<BitIntWrapper | null>(new BitIntWrapper(0));
const resultAtom = atom<BitIntWrapper | null>(new BitIntWrapper(0));

const operatorAtom = atom<BitOperationSymbols | null>(BitOperationSymbols.AND);

const activeInputAtom = atom<IBitInputProps | null>(null);

function createResultsAtom() {
  const baseAtom = atom<BitIntWrapper>(new BitIntWrapper(0));

  const resultAtom = atom<BitIntWrapper>((get) => get(baseAtom));

  const calculateResult = atom(null, (get, set) => {
    const value1 = get(valueAtom);
    const value2 = get(otherValueAtom);
    const operator = get(operatorAtom) ?? BitOperationSymbols.AND;

    if (value1 == null || value2 == null) {
      return;
    }

    const result = performBitOperation(operator, value1, value2);
    set(baseAtom, result);
  });

  return [resultAtom, calculateResult] as const;
}

export default {
  valueAtom,
  otherValueAtom,
  resultAtom,
  operatorAtom,
  activeInputAtom,
  createResultsAtom,
};
