import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className='flex flex-col justify-between size-full container min-h-[75dvh] p-4 md:mx-auto px-2 sm:px-8 md:px-16'>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
