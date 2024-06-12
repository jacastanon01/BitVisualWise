import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className='flex flex-col justify-between size-full container min-h-[75dvh] md:mx-auto sm:px-8 md:px-16'>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
