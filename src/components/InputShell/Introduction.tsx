import Anchor from '../shared/Anchor';

const Introduction = () => (
  <p className='leading-normal tracking-tight text-wrap text-sm md:text-base'>
    Below are two bytes, or 16 bits, and an operand. Enter two numbers numbers
    and click an operation.{' '}
    <Anchor href='https://en.wikipedia.org/wiki/Bitwise_operation'>
      Bitwise operations
    </Anchor>{' '}
    are performed on the{' '}
    <Anchor href='https://learn.circuitverse.org/docs/binary-representation/binary-numbers.html'>
      binary
    </Anchor>{' '}
    representation of a number. Our byte starts at 0 and goes all the way up to
    the 8th bit, which is 128 because it is the 8th power of 2. In this demo, we
    are only dealing with positive numbers so the input range is from 0 to 128.
  </p>
);

export default Introduction;
