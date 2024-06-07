export interface IBitInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function InputValue({ label, value, onChange }: IBitInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed_value = parseInt(e.target.value, 10);
    if (isNaN(parsed_value)) {
      return;
    }

    onChange(parsed_value);
  };

  return (
    <div className='flex flex-col space-y-2'>
      <label className='flex items-center space-x-2'>
        <span>{label}:</span>
        <input
          min={0}
          type='number'
          value={value}
          onChange={handleChange}
          className='border p-2 rounded'
        />
      </label>
    </div>
  );
}

export default InputValue;
