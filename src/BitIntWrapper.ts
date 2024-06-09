import { BitOperationSymbols } from '../types';

class BitIntWrapper {
  private intValue: number;

  constructor(intValue: number) {
    this.intValue = intValue;
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.bitLength()) {
          const value = this.getItem(index);
          index++;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  toBinaryString(): string {
    const binaryString = this.intValue.toString(2).padStart(32, '0');
    const binaryGroups = binaryString.match(/.{1,4}/g) || [];
    const firstNonZeroIdx = binaryGroups.findIndex((g) => g != '0000');
    //   .slice(0, binaryGroups.length);

    const binaryResult = binaryGroups.slice(firstNonZeroIdx).join(' ');
    return binaryResult || '0000';
  }

  getItem(i: number): number {
    return (this.intValue >> i) & 1;
  }

  toInt(): number {
    return this.intValue;
  }

  bitLength(): number {
    return Math.floor(Math.log2(this.intValue) + 1);
  }

  lshift(other: BitIntWrapper): BitIntWrapper {
    return new BitIntWrapper(this.intValue << other.intValue);
  }

  rshift(other: BitIntWrapper): BitIntWrapper {
    return new BitIntWrapper(this.intValue >> other.intValue);
  }

  or(other: BitIntWrapper): BitIntWrapper {
    return new BitIntWrapper(this.intValue | other.intValue);
  }

  and(other: BitIntWrapper): BitIntWrapper {
    return new BitIntWrapper(this.intValue & other.intValue);
  }

  xor(other: BitIntWrapper): BitIntWrapper {
    return new BitIntWrapper(this.intValue ^ other.intValue);
  }

  not(): BitIntWrapper {
    return new BitIntWrapper(~this.intValue & 0xffffff);
  }
}

export default BitIntWrapper;

export const createBitWrapper = (value: number): BitIntWrapper =>
  new BitIntWrapper(value);

export function performBitOperation(
  operator: BitOperationSymbols,
  value1: BitIntWrapper,
  value2: BitIntWrapper
): BitIntWrapper {
  switch (operator) {
    case BitOperationSymbols.L:
      return value1.lshift(value2);
    case BitOperationSymbols.R:
      return value1.rshift(value2);
    case BitOperationSymbols.AND:
      return value1.and(value2);
    case BitOperationSymbols.OR:
      return value1.or(value2);
    case BitOperationSymbols.XOR:
      return value1.xor(value2);
    // case BitOperationSymbols.NOT:
    //   return value1.not()
    default:
      throw new Error('Invalid operator');
  }
}
