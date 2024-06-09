import BitIntWrapper from '../BitIntWrapper';

const BitDisplay = ({
  valueToConvert,
}: {
  valueToConvert: BitIntWrapper | null;
}) => (
  <>
    <div className='p-2 w-full rounded'>
      {valueToConvert ? valueToConvert.toBinaryString() : '0000'}
    </div>
  </>
);

export default BitDisplay;
