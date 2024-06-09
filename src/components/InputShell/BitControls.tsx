import InputWrapper from '../InputValue';
import OperationButtons from './OperationButtons';

function BitControls() {
  return (
    <>
      <section className=''>
        <InputWrapper name='value' />
        {/* <BitDisplay value_to_convert={bit1} /> */}
      </section>

      <section className='max-md:order-first'>
        <OperationButtons />
      </section>

      <section className=''>
        <InputWrapper name='otherValue' />
      </section>
    </>
  );
}

export default BitControls;
