import InputValue from '../InputValue';
import OperationButtons from '../OperationButtons';

function BitControls() {
  return (
    <>
      <section className='w-full '>
        <InputValue name='value' />
        {/* <BitDisplay value_to_convert={bit1} /> */}
      </section>

      <OperationButtons />

      <section className='w-full'>
        <InputValue name='otherValue' />
      </section>
    </>
  );
}

export default BitControls;
