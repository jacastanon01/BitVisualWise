const Introduction = () => (
  <p className='leading-normal tracking-tight text-wrap text-sm md:text-base'>
    Below are two bytes and an operand. A byte is represented by 8 bits that are
    read from right to left. Bitwise operations are performed on the binary
    representation of a number. Our byte starts at 1 and goes all the way up to
    the 8th bit, which is 128 because it is the 8th power of 2. In this demo, I
    am only dealing with positive numbers so the input range is from 0 to 128.
  </p>
);

export default Introduction;
