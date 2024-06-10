import { useAtom } from 'jotai';
import React from 'react';

import { BitOperationSymbols } from '../../../types';
import atom_configs from '../../lib/atomConfigs';

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
          onClick={handleClick}
          name={key}
          className={`fixed-btn bg-transparent border-0 rounded px-2 py-1 ${
            operator == symbol
              ? 'text-shellgreen backdrop-opacity-20 cursor-default'
              : 'text-white shadow-neutral-600 text-xl md:text-3xl shadow-md hover:opacity-80 hover:font-bold'
          }`}
        >
          {operator == symbol ? key : symbol}
        </button>
      );
    }
    return buttonStack.map((element: JSX.Element) => <>{element}</>);
  };

  return (
    <div className='mt-8 flex justify-center items-center gap-2'>
      {generateButtons()}
    </div>
  );
}
export default OperationButtons;
