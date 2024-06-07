import { useState } from 'react';
import BitIntWrapper from '../BitIntWrapper';
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

  //   const mapped_operations_results = BIT_OPERATIONS.reduce(
  //     (previous: string, current: any) => {
  //       if (previous == 'RSHIFT') {
  //         return { ...current, [previous]: shiftedRight };
  //       }
  //     },
  //     {}
  //   );

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Bitwise Visualizer</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <BitInputs
          bits={[value, otherValue]}
          inputValues={{ value, otherValue, shiftAmount }}
          setters={{ setValue, setOtherValue, setShiftAmount }}
        />
      </div>

      <div className='mt-4'>
        <h2 className='text-xl font-semibold mb-2'>Operations</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h3 className='text-lg font-medium'>Left Shift</h3>
            <div className='p-2 bg-gray-100 rounded'>Bits: {shiftedLeft}</div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>Right Shift</h3>
            <div className='p-2 bg-gray-100 rounded'>Bits: {shiftedRight}</div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>OR</h3>
            <div className='p-2 bg-gray-100 rounded'>Bits: {orResult}</div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>AND</h3>
            <div className='p-2 bg-gray-100 rounded'>Bits: {andResult}</div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>XOR</h3>
            <div className='p-2 bg-gray-100 rounded'>Bits: {xorResult}</div>
          </div>
          <div>
            <h3 className='text-lg font-medium'>NOT</h3>
            <div className='p-2 bg-gray-100 rounded'>Bits: {notResult}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BitwiseVisualizer;
