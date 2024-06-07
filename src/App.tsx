import BitwiseVisualizer from './components/BitwiseVisualizer';

function App() {
  return (
    <main className='font-ubuntu bg-[#333] text-gray-100 min-h-screen min-w-full'>
      <div className='container p-4 mx-auto'>
        <h1 className='text-4xl text'></h1>
        <BitwiseVisualizer />
      </div>
    </main>
  );
}

export default App;
