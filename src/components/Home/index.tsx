import InputShell from '../InputShell';
import Title from '../Title';

const Home = () => (
  <main className='flex flex-col space-y-12 justify-between font-ubuntu md:space-y-24'>
    <Title />
    <InputShell />
  </main>
);

export default Home;
