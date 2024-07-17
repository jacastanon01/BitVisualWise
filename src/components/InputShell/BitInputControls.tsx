import InputWrapper from './InputWrapper';
import OperationButtons from './OperationButtons';

const BitInputControls = () => (
  <div className='mt-6 flex flex-col flex-grow-0 justify-between items-center mx-auto'>
    <div className='w-full'>
      <section className='h-52 flex-col flex-grow-0 flex justify-evenly items-center space-y-4'>
        <InputWrapper name='value' />
        <OperationButtons />
        <InputWrapper name='otherValue' />
      </section>
    </div>
  </div>
);

export default BitInputControls;
