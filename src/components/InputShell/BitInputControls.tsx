import InputWrapper from './InputWrapper';
import OperationButtons from './OperationButtons';

const BitInputControls = () => (
  <div className='mt-6 flex flex-col justify-between items-center text-xl md:text-3xl md:flex-row'>
    <section className=''>
      <InputWrapper name='value' />
    </section>

    <section className='max-md:order-first'>
      <OperationButtons />
    </section>

    <section className=''>
      <InputWrapper name='otherValue' />
    </section>
  </div>
);

export default BitInputControls;
