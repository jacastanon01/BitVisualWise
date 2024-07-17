import React from 'react';

const Anchor = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span>
      {' '}
      <a
        className={`underline duration-700 text-white hover:text-stroke hover:no-underline hover:text-shellgreen active:opacity-50 hover:transition-all ${className}`}
        href={href}
        target='_blank'
      >
        {children}
      </a>{' '}
    </span>
  );
};
export default Anchor;
