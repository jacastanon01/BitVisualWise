import InputValue from './InputValue';
import OperationButtons from './OperationButtons';

function BitInputs() {
  return (
    <>
      <section className='w-full '>
        <InputValue name='value' />
        {/* <BitDisplay value_to_convert={bit1} /> */}
      </section>

      <OperationButtons />

      <section className='flex flex-col items-center'>
        <InputValue name='otherValue' />
        {/* <BitDisplay value_to_convert={bit2} /> */}
      </section>

      {/* <InputValue value={shiftAmount} onChange={setShiftAmount} /> */}
    </>
  );
}

export default BitInputs;
