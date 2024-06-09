import InputValue from '../InputValue';
import OperationButtons from '../OperationButtons';

function BitControls() {
  return (
    <>
      <section className=''>
        <InputValue name='value' />
        {/* <BitDisplay value_to_convert={bit1} /> */}
      </section>

      <section className=''>
        <OperationButtons />
      </section>

      <section className=''>
        <InputValue name='otherValue' />
      </section>
    </>
  );
}

export default BitControls;
