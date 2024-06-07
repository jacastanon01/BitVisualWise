import BitIntWrapper from '../BitIntWrapper';

interface IBitDisplayProps {
  label: string;
  bitWrapper: BitIntWrapper;
}

function BitDisplay({ label, bitWrapper }: IBitDisplayProps) {
  return (
    <div>
      <h3 className='text-lg font-medium'>{label}</h3>
      <div className='p-2 bg-gray-100 rounded'>
        Bits: {bitWrapper.toBinaryString() || '0000'}
      </div>
    </div>
  );
}

export default BitDisplay;
