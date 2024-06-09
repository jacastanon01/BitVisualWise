import BitControls from './BitControls';

function InputShell() {
  return (
    <section className='w-full h-[60svh] bits z-20'>
      <div className='w-full flex-shrink-0 flex flex-col items-center text-xl md:text-3xl sm:flex-row'>
        <BitControls />
      </div>
    </section>
  );
}
export default InputShell;
