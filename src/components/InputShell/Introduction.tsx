// import Anchor from '../shared/Anchor';

// const Introduction = () => (
//   <p className='leading-normal  tracking-tight text-wrap text-sm md:text-base space-y-2'>
//     <Anchor href='https://en.wikipedia.org/wiki/Bitwise_operation'>
//       Bitwise operations
//     </Anchor>{' '}
//     are performed on the{' '}
//     <Anchor href='https://learn.circuitverse.org/docs/binary-representation/binary-numbers.html'>
//       binary
//     </Anchor>{' '}
//     representation of a number. A{' '}
//     <Anchor href='https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:digital-information/xcae6f4a7ff015e7d:bits-and-bytes/a/byte-sized-bits'>
//       byte
//     </Anchor>{' '}
//     starts at the right-most bit and goes all the way up to the 8th bit. In this
//     demo, we are only dealing with positive numbers so the input range is from 0
//     to 128. When you chose an operation, the result is calulated by starting
//     from the right bit and comparing it using a thru a{' '}
//     <Anchor href='https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers/xcae6f4a7ff015e7d:logic-gates-and-circuits/a/logic-gates'>
//       logic gate
//     </Anchor>{' '}
//   </p>
// );

// export default Introduction;

import Anchor from '../shared/Anchor';

const Introduction = () => (
  <p className='leading-normal tracking-tight text-sm md:text-base space-y-2'>
    <Anchor href='https://en.wikipedia.org/wiki/Bitwise_operation'>
      Bitwise operations
    </Anchor>
    are performed on the
    <Anchor href='https://learn.circuitverse.org/docs/binary-representation/binary-numbers.html'>
      binary
    </Anchor>
    representation of a number. A
    <Anchor href='https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:digital-information/xcae6f4a7ff015e7d:bits-and-bytes/a/byte-sized-bits'>
      byte
    </Anchor>
    is generally 8 bits. In this demo, we are only dealing with positive numbers
    so the input range is from 0 to 128. When you choose an operation, the
    result is calculated by starting from the right bit and comparing it through
    a
    <Anchor href='https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers/xcae6f4a7ff015e7d:logic-gates-and-circuits/a/logic-gates'>
      logic gate
    </Anchor>
    . Bitwise operations, such as AND, OR, and XOR, allow for the direct
    manipulation of these individual bits within a byte.
  </p>
);

export default Introduction;
