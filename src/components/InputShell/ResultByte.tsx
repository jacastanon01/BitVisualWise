import { useAtom } from 'jotai';
import { useEffect } from 'react';

import BitIntWrapper, { performBitOperation } from '@/lib/BitIntWrapper';
import atomConfigs from '@/lib/atomConfigs';
import ByteDisplay from './ByteDisplay';

function ResultByte() {
  const [value] = useAtom(atomConfigs.valueAtom);
  const [other] = useAtom(atomConfigs.otherValueAtom);
  const [result, setResult] = useAtom(atomConfigs.resultAtom);
  const [operator] = useAtom(atomConfigs.operatorAtom);

  useEffect(() => {
    if (value && other && operator) {
      const calculatedResult = performBitOperation(operator, value, other);
      setResult(calculatedResult);
    } else {
      setResult(new BitIntWrapper(0));
    }
  }, [operator, value, other]);

  return (
    <section className='flex font-extrabold items-center justify-center'>
      <ByteDisplay className='text-3xl md:text-5xl' valueToConvert={result} />
    </section>
  );
}
export default ResultByte;
