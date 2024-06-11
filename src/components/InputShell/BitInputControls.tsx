import InputWrapper from './InputWrapper';
import OperationButtons from './OperationButtons';

const BitInputControls = () => (
  <div className='mt-16 size-full flex max-md:mx-auto flex-col justify-around items-center md:items-center text-xl md:text-3xl lg:flex-row'>
    <section>
      <InputWrapper name='value' />
    </section>

    <section className='max-lg:my-4 max-md:order-0'>
      <OperationButtons />
    </section>

    <section>
      <InputWrapper name='otherValue' />
    </section>
  </div>
);

export default BitInputControls;
