function Footer() {
  return (
    <footer className='fixed bottom-0 right-0 w-full font-mono'>
      <div className='container mx-auto flex justify-end px-2 sm:px-4 lg:px-12'>
        <p className='text-sm text-gray-300'>
          Jacob Castanon |{' '}
          <a
            className='hover:text-shellgreen hover:transition-colors duration-700'
            href='https://github.com/jacastanon01'
            target='_blank'
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
