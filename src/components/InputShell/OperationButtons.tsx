import { useAtom } from 'jotai';
import React from 'react';

import atom_configs from '@/lib/atomConfigs';
import { BitOperationSymbols } from 'types/index.ts';

function OperationButtons() {
  const [operator, setOperator] = useAtom(atom_configs.operatorAtom);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const key = e.currentTarget.name as keyof typeof BitOperationSymbols;
    setOperator(BitOperationSymbols[key]);
  };

  const generateButtons = (): Array<JSX.Element> => {
    const buttonStack = [];
    for (const [key, symbol] of Object.entries(BitOperationSymbols)) {
      buttonStack.push(
        <button
          disabled={operator == symbol}
          key={key}
          onClick={handleClick}
          name={key}
          className={`size-full bg-transparent border-0 rounded ${
            operator == symbol
              ? 'text-shellgreen backdrop-opacity-20 cursor-default'
              : 'text-white px-2 py-1 shadow shadow-neutral-600 text-base sm:text-lg lg:text-2xl hover:opacity-80'
          }`}
        >
          {operator == symbol ? symbol : key}
        </button>
      );
    }
    return buttonStack.map((element: JSX.Element) => (
      <article className='fixed-btn' key={element.key}>
        {element}
      </article>
    ));
  };

  return (
    <section className='flex justify-center items-center flex-shrink-0 md:gap-2'>
      {generateButtons()}
    </section>
  );
}
export default OperationButtons;
