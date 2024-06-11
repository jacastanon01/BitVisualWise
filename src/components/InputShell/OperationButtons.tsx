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
          key={key}
          onClick={handleClick}
          name={key}
          className={`size-full bg-transparent border-0 rounded ${
            operator == symbol
              ? 'text-shellgreen backdrop-opacity-20 cursor-default'
              : 'text-white px-2 py-1 shadow-neutral-600 text-xl md:text-3xl shadow-md hover:opacity-80 hover:font-bold'
          }`}
        >
          {operator == symbol ? key : symbol}
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
    <div className='flex justify-center items-center gap-2'>
      {generateButtons()}
    </div>
  );
}
export default OperationButtons;
