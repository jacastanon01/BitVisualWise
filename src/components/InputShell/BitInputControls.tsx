import InputWrapper from './InputWrapper';
import OperationButtons from './OperationButtons';

const BitInputControls = () => (
  <div className='w-full mt-6 flex flex-col justify-between items-center mx-auto'>
    <section className='items-stretch flex flex-col space-y-4'>
      <InputWrapper name='value' />
      <OperationButtons />
      <InputWrapper name='otherValue' />
    </section>
  </div>
);

export default BitInputControls;
