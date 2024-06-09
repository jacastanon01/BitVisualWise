import { IBitDisplayProps } from '../../types';

const BitDisplay = ({ valueToConvert }: IBitDisplayProps) => (
  <div className='flex w-full'>{valueToConvert?.toBinaryString()}</div>
);

export default BitDisplay;
