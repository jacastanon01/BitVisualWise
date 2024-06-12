import { useAtom } from 'jotai';

import BitIntWrapper, { createBitWrapper } from '@/lib/BitIntWrapper';
import atomConfigs from '@/lib/atomConfigs';
import { IBitInputProps } from 'types/';
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
    <div
      onClick={handleFocus}
      className='flex justify-center items-center text-xl md:text-3xl hover:cursor-text'
    >
      {activeInput?.name == name ? (
        <label className='flex lg:w-1/2' htmlFor={name}>
          <input
            onClick={handleFocus}
            aria-current={true}
            autoFocus
            name={name}
            min={-1}
            max={128}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            value={
              atomValue instanceof BitIntWrapper
                ? atomValue.toInt()
                : createBitWrapper(0).toInt()
            }
            className='bits flex size-full border-none rounded focus:outline-none'
          />
        </label>
      ) : (
        <button>
          <ByteDisplay className='focus:hidden' valueToConvert={atomValue} />
        </button>
      )}
    </div>
  );
}

export default InputWrapper;
