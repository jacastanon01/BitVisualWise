import InputWrapper from '../InputWrapper';
import OperationButtons from './OperationButtons';

const BitControls = () => (
  <>
    <section className=''>
      <InputWrapper name='value' />
    </section>

    <section className='max-md:order-first'>
      <OperationButtons />
    </section>

    <section className=''>
      <InputWrapper name='otherValue' />
    </section>
  </>
);

export default BitControls;
