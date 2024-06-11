import BitInputControls from './BitInputControls';
import Introduction from './Introduction';
import ResultByte from './ResultByte';

function InputShell() {
  return (
    <section className=' bits z-20 mt-14 rounded-xl'>
      <header className='p-4 flex items-center justify-center bg-neutral-700 text-white rounded-t-xl'>
        <p className='text-center font-light leading-normal whitespace-pre text-wrap md:text-xl'>
          A place to become a bit wiser in binary arithmetic.
        </p>
      </header>
      <div className='flex-col size-full flex justify-between p-8'>
        <Introduction />
        <BitInputControls />
        <ResultByte />
      </div>
    </section>
  );
}
export default InputShell;
