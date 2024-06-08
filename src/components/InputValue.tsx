export interface IBitInputProps {
  label?: string;
  value: number | undefined;
  onChange: (value: number) => void;
}

function InputValue({ label, value, onChange }: IBitInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed_value = parseInt(e.target.value, 10);
    if (!isNaN(parsed_value)) {
      onChange(parsed_value);
      console.log(value);
      console.log(typeof value);
    }
  };

  return (
    <div className='flex flex-col space-y-2'>
      <label className='flex items-center space-x-2'>
        {label && <span>{label}:</span>}
        <input
          min={0}
          type='number'
          value={value && value}
          onChange={handleChange}
          className='text-shellbg ring-neutral-500 border-none p-2 rounded focus:outline-none focus:border'
        />
      </label>
    </div>
  );
}

export default InputValue;
