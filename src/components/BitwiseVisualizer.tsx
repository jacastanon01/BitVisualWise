import InputShell from './InputShell';

const BitwiseVisualizer = () => (
  <>
    <main className='font-ubuntu mb-4 overflow-hidden'>
      <h1 className='text-4xl text-shellgreen text-center font-bold leading-normal text md:text-[3.5rem]'>
        Bit<span className=' text-shellbg'>Visual</span>Wiser
      </h1>
      <p className='text-xl text-center font-light leading-normal whitespace-pre text-wrap'>
        {'\n'}A place to become a bit wiser in binary arithmetic.
      </p>
      <InputShell />
    </main>
  </>
);

export default BitwiseVisualizer;
