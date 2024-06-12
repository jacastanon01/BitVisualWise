import InputWrapper from './InputWrapper';
import OperationButtons from './OperationButtons';

const BitInputControls = () => (
  <div className='w-full mt-6 flex flex-col justify-between items-center mx-auto md:mt-16 lg:flex-row'>
    <section className='size-full justify-center flex'>
      <InputWrapper name='value' />
    </section>

    <section className='size-full max-lg:my-4 max-md:order-0'>
      <OperationButtons />
    </section>

    <section className='size-full flex justify-center'>
      <InputWrapper name='otherValue' />
    </section>
  </div>
);

export default BitInputControls;
