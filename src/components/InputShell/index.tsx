import BitControls from './BitControls';
import Introduction from './Introduction';

function InputShell() {
  return (
    <section className='h-[60svh] bits z-20 mt-14'>
      <div className='h-full p-4 mt-8'>
        <Introduction />
        <BitControls />
      </div>
    </section>
  );
}
export default InputShell;
