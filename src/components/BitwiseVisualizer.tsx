import { useState } from 'react';
import BitIntWrapper from '../BitIntWrapper';
import BitInputs from './BitInputs';

function BitwiseVisualizer() {
  const [value, setValue] = useState<number>(0);
  const [otherValue, setOtherValue] = useState<number>(0);
  const [shiftAmount, setShiftAmount] = useState<number>(0);

  const bitWrapper = new BitIntWrapper(value);
  const otherBitWrapper = new BitIntWrapper(otherValue);

  const shiftedLeft = bitWrapper.lshift(shiftAmount);
  const shiftedRight = bitWrapper.rshift(shiftAmount);
  const orResult = bitWrapper.or(otherBitWrapper);
  const andResult = bitWrapper.and(otherBitWrapper);
  const xorResult = bitWrapper.xor(otherBitWrapper);
  const notResult = bitWrapper.not();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Bitwise Visualizer</h1>
      <BitInputs
        bits={[value, otherValue]}
        inputValues={{ value, otherValue, shiftAmount }}
        setters={{ setValue, setOtherValue, setShiftAmount }}
      />
      <div className='mt-4'>
        <h2 className='text-xl font-semibold mb-2'>Operations</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h3 className='text-lg font-medium'>Left Shift</h3>
            <div className='p-2 bg-gray-100 rounded'>
              Bits: {[...shiftedLeft].join('')}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>Right Shift</h3>
            <div className='p-2 bg-gray-100 rounded'>
              Bits: {[...shiftedRight].join('')}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>OR</h3>
            <div className='p-2 bg-gray-100 rounded'>
              Bits: {[...orResult].join('')}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>AND</h3>
            <div className='p-2 bg-gray-100 rounded'>
              Bits: {[...andResult].join('')}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>XOR</h3>
            <div className='p-2 bg-gray-100 rounded'>
              Bits: {[...xorResult].join('')}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>NOT</h3>
            <div className='p-2 bg-gray-100 rounded'>
              Bits: {[...notResult].join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BitwiseVisualizer;
