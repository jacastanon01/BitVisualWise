const Introduction = () => (
  <p className='leading-normal tracking-tight text-wrap text-sm md:text-base'>
    Below is an expression that uses bitwise operations. Bitwise operations are
    performed on the binary representation of a number. This means that you can
    only use numbers between 0 and 1. To understand what is going on here,
    let&apos;s enter 2 as the first value, and 1 as the second. Now shift left{' '}
    <code>&lt;&lt;</code>. What you just did was shift the first value (2) 1
    place to the left, resulting in the the number (4). Take this result and put
    it in the first entry and shift one place left again. As our one moves left,
    our result doubles. Now use the and operand <code>8 &amp;&amp; 1</code>
  </p>
);

export default Introduction;
