import InputWrapper from './InputWrapper';
import OperationButtons from './OperationButtons';

const BitInputControls = () => (
  <div className='mt-16 size-full flex flex-col justify-between items-center max-md:mx-auto lg:flex-row'>
    <section className=''>
      <InputWrapper name='value' />
    </section>

    <section className=' max-lg:my-4 max-md:order-0'>
      <OperationButtons />
    </section>

    <section className=''>
      <InputWrapper name='otherValue' />
    </section>
  </div>
);

export default BitInputControls;
