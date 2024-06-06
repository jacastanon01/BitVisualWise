export interface IBitInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function BitInputBox({ label, value, onChange }: IBitInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className='flex flex-col space-y-2'>
      <label className='flex items-center space-x-2'>
        <span>{label}:</span>
        <input
          type='number'
          value={value}
          onChange={handleChange}
          className='border p-2 rounded'
        />
      </label>
    </div>
  );
}

export default BitInputBox;
