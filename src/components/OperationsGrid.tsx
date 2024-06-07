function OperationsGrid({
  operation,
  bits,
}: {
  operation: string;
  bits: string;
}) {
  let label: string;
  if (operation == 'L') {
    label = 'Left Shift';
  } else if (operation == 'R') {
    label = 'Right Shift';
  } else {
    label = operation.toUpperCase();
  }
  return (
    <>
      <h3 className='text-lg font-medium'>{label}</h3>
      <div className='p-2 bg-gray-100 rounded'>Bits: {bits}</div>
    </>
  );
}

export default OperationsGrid;
