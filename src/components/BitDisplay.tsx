import BitIntWrapper from '../BitIntWrapper';

const BitDisplay = ({ valueToConvert }: { valueToConvert: BitIntWrapper }) => (
  <div className='flex w-full'>{valueToConvert?.toBinaryString()}</div>
);

export default BitDisplay;
