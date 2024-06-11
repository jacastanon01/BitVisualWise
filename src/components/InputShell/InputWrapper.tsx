import { useAtom } from 'jotai';

import { IBitInputProps } from 'types/';
import BitIntWrapper, { createBitWrapper } from '@/lib/BitIntWrapper';
import atomConfigs from '@/lib/atomConfigs';
import ByteDisplay from './ByteDisplay';

function InputWrapper({ name }: IBitInputProps) {
  const [activeInput, setActiveInput] = useAtom(atomConfigs.activeInputAtom);
  const [valueAtom, setValueAtom] = useAtom(atomConfigs.valueAtom);
  const [otherValueAtom, setOtherValueAtom] = useAtom(
    atomConfigs.otherValueAtom
  );

  let atomValue: BitIntWrapper | number | null =
    name == 'value' ? valueAtom : otherValueAtom;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    // ? maybe debounce
    if (newValue === '') {
      if (activeInput?.name === name) {
        if (name === 'value') {
          setValueAtom(null);
        } else {
          setOtherValueAtom(null);
        }
      }
    } else {
      const parsedValue = parseInt(newValue, 10);

      if (!isNaN(parsedValue) && activeInput?.name == name) {
        const bitWrapperObj = createBitWrapper(parsedValue);
        if (name == 'value') {
          setValueAtom(bitWrapperObj);
        }
        if (name == 'otherValue') {
          setOtherValueAtom(bitWrapperObj);
        }
      }
    }
  };

  const handleFocus = () => setActiveInput({ name });

  const handleBlur = () => setActiveInput(null);

  return (
    <div className=' md:max-w-48'>
      <div onClick={handleFocus} className='flex items-center'>
        {activeInput?.name == name ? (
          <label htmlFor={name}>
            <input
              autoFocus
              // onKeyUp={(e) => console.log(e.key)}
              name={name}
              min={-1}
              max={128}
              onClick={handleFocus}
              onBlur={handleBlur}
              type='text'
              value={
                atomValue instanceof BitIntWrapper
                  ? atomValue.toInt()
                  : createBitWrapper(0).toInt()
              }
              onChange={handleChange}
              className='text-shellbg pr-0 w-full border-none rounded bits focus:outline-none focus:border'
            />
          </label>
        ) : (
          <div>
            <ByteDisplay className='text-3xl' valueToConvert={atomValue} />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputWrapper;
