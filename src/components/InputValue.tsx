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
  console.log({ valueAtom });
  let atomValue: BitIntWrapper | number | null =
    name == 'value' ? valueAtom : otherValueAtom;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value, 10);

    if (!isNaN(parsedValue) && activeInput == name) {
      const bitWrapperObj = createBitWrapper(parsedValue);
      if (name == 'value') {
        setValueAtom(bitWrapperObj);
      }
      if (name == 'otherValue') {
        setOtherValueAtom(bitWrapperObj);
      }
    }
  };

  const handleFocus = () => setActiveInput(name);

  const handleBlur = () => setActiveInput(null);

  return (
    <div className=' md:max-w-48'>
      <div onClick={handleFocus} className='flex items-center'>
        {activeInput == name ? (
          <label htmlFor={name}>
            <input
              name={name}
              min={-127}
              max={128}
              onClick={handleFocus}
              onBlur={handleBlur}
              type='number'
              value={atomValue instanceof BitIntWrapper ? atomValue.toInt() : 0}
              onChange={handleChange}
              className='text-shellbg w-full border-none rounded bits focus:outline-none focus:border'
            />
          </label>
        ) : (
          <div>
            <BitDisplay valueToConvert={atomValue} />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputValue;
