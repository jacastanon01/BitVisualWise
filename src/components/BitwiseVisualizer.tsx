import { useState } from 'react';
import BitIntWrapper from '../BitIntWrapper';
import BitDisplay from './BitDisplay';
import BitInputs from './BitInputs';

function BitwiseVisualizer() {
  const [value, setValue] = useState<number>(0);
  const [otherValue, setOtherValue] = useState<number>(0);
  const [shiftAmount, setShiftAmount] = useState<number>(0);

  const bitWrapper = new BitIntWrapper(value);
  const otherBitWrapper = new BitIntWrapper(otherValue);

  const shiftedLeft = bitWrapper.lshift(shiftAmount).toBinaryString() || '0000';
  const shiftedRight =
    bitWrapper.rshift(shiftAmount).toBinaryString() || '0000';
  const orResult = bitWrapper.or(otherBitWrapper).toBinaryString() || '0000';
  const andResult = bitWrapper.and(otherBitWrapper).toBinaryString() || '0000';
  const xorResult = bitWrapper.xor(otherBitWrapper).toBinaryString() || '0000';
  const notResult = bitWrapper.not().toBinaryString() || '0000';

  const bitshiftResults = {
    L: shiftedLeft,
    R: shiftedRight,
  };

  const bitwiseResults = {
    ...bitshiftResults,
    OR: orResult,
    AND: andResult,
    XOR: xorResult,
    NOT: notResult,
  };

  const generateBitResults = () => {
    const items = [];
    for (const [operation, result] of Object.entries(bitwiseResults)) {
      items.push(
        <article key={operation}>
          <BitDisplay operation={operation} bits={result} />
        </article>
      );
    }
    return items;
  };

  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <BitInputs
          inputValues={[value, otherValue, shiftAmount]}
          setters={[setValue, setOtherValue, setShiftAmount]}
        />
      </div>

      <div className='mt-4'>
        <h2 className='text-xl font-semibold mb-2'>Operations</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {[...generateBitResults()]}
        </div>
      </div>
    </>
  );
}

export default BitwiseVisualizer;
