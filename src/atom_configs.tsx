import { atom } from 'jotai';

const valueAtom = atom(0);
const otherValueAtom = atom(0);
const shiftAmountAtom = atom(0);

const operatorAtom = atom('AND');

const activeInputAtom = atom<null | 'value' | 'otherValue' | 'shiftAmount'>(
  null
);

export default {
  valueAtom,
  otherValueAtom,
  shiftAmountAtom,
  operatorAtom,
  activeInputAtom,
};
