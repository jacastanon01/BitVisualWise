import { useAtom } from 'jotai';
import React from 'react';

import { BitOperationSymbols } from '../../types';
import atom_configs from '../atomConfigs';

function OperationButtons() {
  const [, setOperator] = useAtom(atom_configs.operatorAtom);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const key = e.currentTarget.name as keyof typeof BitOperationSymbols;
    setOperator(BitOperationSymbols[key]);
  };
  return (
    <div className='w-full h-52 bg-slate-400 flex flex-wrap space-x-2 justify-center items-center gap-4'>
      {Object.values(BitOperationSymbols).map((symbol: string) => (
        <button
          name={symbol}
          onClick={handleClick}
          key={symbol}
          className='rounded shadow-md bg-shellbg text-white px-2 py-1 text-xl md:text-3xl'
        >
          {symbol}
        </button>
      ))}
    </div>
  );
}
export default OperationButtons;
