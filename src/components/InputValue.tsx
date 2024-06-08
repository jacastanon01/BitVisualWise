import { useAtom } from 'jotai';
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
  const atomValue = name == 'value' ? valueAtom : otherValueAtom;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed_value = parseInt(e.target.value, 10);
    if (!isNaN(parsed_value) && activeInput == name) {
      if (name == 'value') {
        setValueAtom(parsed_value);
      }
      if (name == 'otherValue') {
        setOtherValueAtom(parsed_value);
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
    <div className='flex flex-col space-y-2'>
      <label onClick={handleFocus} className='flex items-center space-x-2'>
        {activeInput == name ? (
          // {name && <span>{name}:</span>}
          <input
            onClick={handleFocus}
            onBlur={handleBlur}
            min={0}
            type='number'
            value={atomValue}
            onChange={handleChange}
            className='text-shellbg ring-neutral-500 border-none p-2 rounded focus:outline-none focus:border'
          />
        ) : (
          <BitDisplay value_to_convert={atomValue} />
        )}
      </label>
    </div>
  );
}

export default InputValue;
