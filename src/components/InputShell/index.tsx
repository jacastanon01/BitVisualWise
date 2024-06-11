import BitInputControls from './BitInputControls';
import Introduction from './Introduction';
import ResultByte from './ResultByte';

function InputShell() {
  return (
    <section className=' bits z-20 shadow-neutral-600 shadow-lg mt-14 rounded-md'>
      <header className='h-16 bg-neutral-600'></header>
      <div className='flex-col flex justify-around p-8'>
        <Introduction />
        <BitInputControls />
        <ResultByte />
      </div>
    </section>
  );
}
export default InputShell;
