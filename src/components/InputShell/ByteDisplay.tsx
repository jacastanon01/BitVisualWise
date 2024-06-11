import { IByteDisplayProps } from 'types/';

const ByteDisplay = ({
  valueToConvert,
  className,
}: IByteDisplayProps & { className?: string }) => (
  <p className={`${className}`}>
    {valueToConvert?.toBinaryString() ?? '0000 0000'}
  </p>
);

export default ByteDisplay;
