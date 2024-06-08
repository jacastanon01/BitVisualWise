import BitIntWrapper from '../BitIntWrapper';

function BitDisplay({ value_to_convert }: { value_to_convert: number }) {
  const bitString = new BitIntWrapper(value_to_convert).toBinaryString();
  return (
    <>
      <div className='p-2 bg-gray-100 rounded'>{bitString}</div>
    </>
  );
}

export default BitDisplay;
