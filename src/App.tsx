import BitwiseVisualizer from './components/BitwiseVisualizer';
import Footer from './components/Footer';

function App() {
  return (
    <main className='font-ubuntu min-h-screen min-w-full'>
      <div className='container p-4 mx-auto'>
        <h1 className='text-4xl text'></h1>
        <BitwiseVisualizer />
        <Footer />
      </div>
    </main>
  );
}

export default App;
