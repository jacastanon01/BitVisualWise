import { IByteDisplayProps } from 'types/';

const ByteDisplay = ({ valueToConvert }: IByteDisplayProps) => (
  <div className='flex w-full'>{valueToConvert?.toBinaryString()}</div>
);

export default ByteDisplay;
