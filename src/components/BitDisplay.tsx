import BitIntWrapper from '../BitIntWrapper';

const BitDisplay = ({
  value_to_convert,
}: {
  value_to_convert: BitIntWrapper | null;
}) => (
  <>
    <div className='p-2 bg-gray-100 rounded'>
      {value_to_convert ? value_to_convert.toBinaryString() : '0000'}
    </div>
  </>
);

export default BitDisplay;
