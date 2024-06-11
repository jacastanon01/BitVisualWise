import Footer from './components/Footer';
import BitwiseVisualizer from './components/TitleContent/BitwiseVisualizer';

function App() {
  return (
    <div className='container min-h-[75dvh] p-4 md:mx-auto px-2 sm:px-4 lg:px-24'>
      <BitwiseVisualizer />
      <Footer />
    </div>
  );
}

export default App;
