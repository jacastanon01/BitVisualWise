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

  getItem(i: number): number {
    return (this.intValue >> i) & 1;
  }

  bitLength(): number {
    return Math.floor(Math.log2(this.intValue) + 1);
  }

  lshift(other: number): BitIntWrapper {
    return new BitIntWrapper(this.intValue << other);
  }

  rshift(other: number): BitIntWrapper {
    return new BitIntWrapper(this.intValue >> other);
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
