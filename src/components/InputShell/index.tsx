import BitControls from './BitControls';

function InputShell() {
  return (
    <section className='w-full h-[60svh] bits z-20'>
      <div className='flex flex-col justify-between items-center bg-slate-400 text-xl md:text-3xl sm:flex-row'>
        <BitControls />
      </div>
    </section>
  );
}
export default InputShell;
