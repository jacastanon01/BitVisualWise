import { IByteDisplayProps } from 'types/';

const ByteDisplay = ({
  valueToConvert,
  className,
}: IByteDisplayProps & { className?: string }) => (
  <p className={`${className}`}>{valueToConvert?.toBinaryString()}</p>
);

export default ByteDisplay;
