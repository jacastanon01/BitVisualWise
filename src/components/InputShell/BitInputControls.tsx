import InputWrapper from './InputWrapper';
import OperationButtons from './OperationButtons';

const BitInputControls = () => (
  <div className='mt-16 flex flex-col justify-between items-center text-xl md:text-3xl md:flex-row'>
    <section>
      <InputWrapper name='value' />
    </section>

    <section className='max-md:order-0'>
      <OperationButtons />
    </section>

    <section>
      <InputWrapper name='otherValue' />
    </section>
  </div>
);

export default BitInputControls;
