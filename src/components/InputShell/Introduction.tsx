const Introduction = () => (
  <p className='leading-normal tracking-tight text-wrap text-sm md:text-base'>
    Below are two inputs with each representing one byte, or 8 bits. Binary is
    read from right to left with each place doubling in value. To demonstrate,
    enter 2 in the first entry and 1 in the second entry. Now shift left. What
    you just did was shift the first value (2) the second value (1) places to
    the left, resulting in the result (4). Take this result and put it in the
    first entry and shift one place left again.
  </p>
);

export default Introduction;
