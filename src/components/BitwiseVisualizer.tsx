import InputShell from './InputShell';

const BitwiseVisualizer = () => (
  <>
    <main className='font-ubuntu min-w-full flex flex-col mb-4 overflow-hidden'>
      <h1 className='text-4xl mb-3 text-shellgreen text-center font-bold leading-normal text  md:text-[3.5rem]'>
        Bit<span className=' text-shellbg'>Visual</span>Wiser
      </h1>
      <p className='text-xl text-center font-light leading-normal whitespace-pre text-wrap'>
        {'\n'}A place to learn simple binary arithmatic and become a bit
        wiser...
      </p>
      <InputShell />
    </main>
  </>
);

export default BitwiseVisualizer;
