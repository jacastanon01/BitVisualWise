import { useAtom } from 'jotai';
import React from 'react';

import { BitOperationSymbols } from '../../types';
import atom_configs from '../atomConfigs';

function OperationButtons() {
  const [operator, setOperator] = useAtom(atom_configs.operatorAtom);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const key = e.currentTarget.name as keyof typeof BitOperationSymbols;
    console.log({ key });
    console.log(BitOperationSymbols[key]);
    setOperator(BitOperationSymbols[key]);
    // console.log(operator, e.currentTarget.name);
  };

  const generateButtons = (): Array<JSX.Element> => {
    const buttonStack = [];
    for (const [key, symbol] of Object.entries(BitOperationSymbols)) {
      buttonStack.push(
        <button
          name={key}
          onClick={handleClick}
          key={symbol}
          className={`rounded shadow-md   px-2 py-1 text-xl md:text-3xl ${
            operator == symbol
              ? 'text-shellgreen scale-95 backdrop-opacity-20'
              : 'text-white shadow-neutral-600 hover:opacity-80 hover:scale-105'
          }`}
        >
          {symbol}
        </button>
      );
    }
    return buttonStack;
  };
  return (
    <div className='w-full flex flex-shrink-0 space-x-2 justify-center items-center gap-4'>
      {/* {Object.entries(BitOperationSymbols).map(
        ({key: string, symbol: string}) => (
          <button
            name={symbol}
            onClick={handleClick}
            key={symbol}
            className={`rounded shadow-md shadow-neutral-600 bg-shellbg text-white px-2 py-1 text-xl md:text-3xl ${
              operator == symbol
                ? 'bg-gray-400 scale-95'
                : 'hover:opacity-80 hover:scale-105'
            }`}
          >
            {symbol}
          </button>
        )
      )} */}
      {generateButtons().map((element: JSX.Element) => (
        <>{element}</>
      ))}
    </div>
  );
}
export default OperationButtons;
