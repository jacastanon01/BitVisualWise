import InputValue from './InputValue';

function BitInputs() {
  return (
    <>
      <section className='w-full '>
        <InputValue name='value' />
        {/* <BitDisplay value_to_convert={bit1} /> */}
      </section>

      <section className='flex flex-col items-center'>
        <InputValue name='otherValue' />
        {/* <BitDisplay value_to_convert={bit2} /> */}
      </section>

      {/* <InputValue value={shiftAmount} onChange={setShiftAmount} /> */}
    </>
  );
}

export default BitInputs;
