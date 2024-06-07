function BitDisplay({
  label,
  operation,
  bits,
}: {
  label?: string;
  operation?: string;
  bits: string;
}) {
  if (operation) {
    if (operation == 'L') {
      label = 'Left Shift';
    } else if (operation == 'R') {
      label = 'Right Shift';
    } else {
      label = operation?.toUpperCase();
    }
  }

  return (
    <>
      <h3 className='text-lg font-medium'>{label || ''}</h3>
      <div className='p-2 bg-gray-100 rounded'>Bits: {bits}</div>
    </>
  );
}

export default BitDisplay;
