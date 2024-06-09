import { useAtom } from 'jotai';
import BitIntWrapper, { createBitWrapper } from '../BitIntWrapper';
import atomConfigs from '../atomConfigs';
import BitDisplay from './BitDisplay';

export interface IBitInputProps {
  name: 'value' | 'otherValue';
}

function InputValue({ name }: IBitInputProps) {
  const [activeInput, setActiveInput] = useAtom(atomConfigs.activeInputAtom);
  const [valueAtom, setValueAtom] = useAtom(atomConfigs.valueAtom);
  const [otherValueAtom, setOtherValueAtom] = useAtom(
    atomConfigs.otherValueAtom
  );

  let atomValue: BitIntWrapper | number | null =
    name == 'value' ? valueAtom : otherValueAtom;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value, 10);
    console.log(parsedValue);
    if (!isNaN(parsedValue) && activeInput == name) {
      const bitWrapperObj = createBitWrapper(parsedValue);
      if (name == 'value') {
        setValueAtom(bitWrapperObj);
      }
      if (name == 'otherValue') {
        setOtherValueAtom(bitWrapperObj);
      }
    }
    console.log(valueAtom?.toBinaryString());
    console.log(valueAtom?.toInt());
  };

  const handleFocus = () => setActiveInput(name);

  const handleBlur = () => setActiveInput(null);

  return (
    <div className='w-full flex flex-col space-y-2 mt-4'>
      <label onClick={handleFocus} className='flex items-center space-x-2'>
        {activeInput == name ? (
          <input
            min={-127}
            max={128}
            onClick={handleFocus}
            onBlur={handleBlur}
            type='number'
            value={atomValue instanceof BitIntWrapper ? atomValue.toInt() : 0}
            onChange={handleChange}
            className='text-shellbg ring-neutral-500 border-none p-2 rounded bits focus:outline-none focus:border'
          />
        ) : (
          <BitDisplay valueToConvert={atomValue} />
        )}
      </label>
    </div>
  );
}

export default InputValue;
