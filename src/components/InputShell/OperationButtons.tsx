import { useAtom } from 'jotai';
import React from 'react';

import { BitOperationSymbols } from '../../../types';
import atom_configs from '../../atomConfigs';

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
          name={key}
          onClick={handleClick}
          key={key}
          className={`rounded shadow-md  px-2 py-1 text-xl md:text-3xl ${
            operator == symbol
              ? 'text-shellgreen scale-95 backdrop-opacity-20'
              : 'text-white shadow-neutral-600 shadow-sm hover:opacity-80 hover:scale-105'
          }`}
        >
          {symbol}
        </button>
      );
    }
    return buttonStack.map((element: JSX.Element) => <>{element}</>);
  };

  return (
    <div className='w-full flex flex-shrink-0 justify-center items-center gap-4'>
      {generateButtons()}
    </div>
  );
}
export default OperationButtons;
