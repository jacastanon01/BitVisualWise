import BitIntWrapper from '../src/lib/BitIntWrapper';

export enum BitOperationSymbols {
  L = '<<',
  R = '>>',
  OR = '|',
  AND = '&',
  XOR = '^',
}

export interface IBitInputProps {
  name: 'value' | 'otherValue';
}

export interface IByteDisplayProps {
  valueToConvert: BitIntWrapper | null;
}
