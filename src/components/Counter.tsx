import { MouseEventHandler } from 'react';

export const Counter = ({
  quantity,
  handleQuantity,
}: {
  quantity: number;
  handleQuantity: any;
}) => {
  return (
    <div className='flex flex-row gap-2 items-center '>
      <button
        onClick={() => {
          handleQuantity('DEC');
        }}
        className='rounded-full w-7 border border-black h-7 font-bold hover:bg-gray-400'
      >
        -
      </button>
      <span className='font-bold'>{quantity}</span>
      <button
        onClick={() => {
          handleQuantity('INC');
        }}
        className='rounded-full w-7 border border-black h-7 font-bold hover:bg-gray-400'
      >
        +
      </button>
    </div>
  );
};
