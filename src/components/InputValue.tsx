import { useAtom } from 'jotai';
import BitIntWrapper, { createBitWrapper } from '../BitIntWrapper';
import atom_configs from '../atom_configs';
import BitDisplay from './BitDisplay';

export interface IBitInputProps {
  name: 'value' | 'otherValue';
}

function InputValue({ name }: IBitInputProps) {
  const [activeInput, setActiveInput] = useAtom(atom_configs.activeInputAtom);
  const [valueAtom, setValueAtom] = useAtom(atom_configs.valueAtom);
  const [otherValueAtom, setOtherValueAtom] = useAtom(
    atom_configs.otherValueAtom
  );

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

  function handleFocus() {
    setActiveInput(name);
  }

  function handleBlur() {
    setActiveInput(null);
  }

  return (
    <div className='w-full flex flex-col space-y-2 mt-4'>
      <label onClick={handleFocus} className='flex items-center space-x-2'>
        {activeInput == name ? (
          // {name && <span>{name}:</span>}
          <input
            onClick={handleFocus}
            onBlur={handleBlur}
            min={0}
            type='number'
            value={atomValue ? atomValue.toInt() : 0}
            onChange={handleChange}
            className='text-shellbg ring-neutral-500 border-none p-2 rounded bits focus:outline-none focus:border'
          />
        ) : (
          <BitDisplay value_to_convert={atomValue} />
        )}
      </label>
    </div>
  );
}

export default InputValue;
