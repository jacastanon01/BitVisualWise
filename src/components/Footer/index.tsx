import Anchor from '../shared/Anchor';

const Footer = () => (
  <footer className='bottom-0 right-0 font-mono z-0'>
    <div className='container mx-auto flex justify-end px-2 sm:px-4 lg:px-24'>
      <p className='text-sm text-white'>
        Jacob Castanon |{' '}
        <Anchor href='https://github.com/jacastanon01'>GitHub</Anchor>
      </p>
    </div>
  </footer>
);

export default Footer;
