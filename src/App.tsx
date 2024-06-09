import BitwiseVisualizer from './components/BitwiseVisualizer';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container p-4 mx-auto px-2 sm:px-4 lg:px-12'>
      <main className='font-ubuntu min-w-full flex flex-col flex-grow mb-4'>
        <h1 className='text-4xl mb-3 text-shellgreen text-center font-bold leading-normal text  md:text-[3.5rem]'>
          Bit<span className=' text-shellbg'>Visual</span>Wiser
        </h1>
        <BitwiseVisualizer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
