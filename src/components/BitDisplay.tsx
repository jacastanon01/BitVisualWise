import BitIntWrapper from '../BitIntWrapper';

const BitDisplay = ({
  valueToConvert,
}: {
  valueToConvert: BitIntWrapper | null;
}) => {
  const bitString = valueToConvert?.toBinaryString();
  console.log({ bitString, valueToConvert });
  return (
    // <div className='p-2 rounded'>
    <div className='flex w-full'>
      {valueToConvert ? valueToConvert.toBinaryString() : '0000 0000'}
    </div>
    // </div>
  );
};

export default BitDisplay;
