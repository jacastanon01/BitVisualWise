import BitwiseVisualizer from './components/BitwiseVisualizer';
import Footer from './components/Footer';

function App() {
  return (
    <main className='font-ubuntu min-w-full'>
      <div className='container p-4 mx-auto'>
        <h1 className='text-4xl mb-3 text-shellgreen text-center font-bold leading-normal text md:text-[3.5rem]'>
          Bit<span className=' text-shellbg'>Visual</span>Wizer
        </h1>
        <BitwiseVisualizer />
        <Footer />
      </div>
    </main>
  );
}

export default App;
