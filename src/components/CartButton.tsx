import { MouseEventHandler } from 'react';
import { Cart } from './icons/Cart';

export const CartButton = ({
  drawerToggle,
}: {
  drawerToggle: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={drawerToggle}
      className='bg-purple-300 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded inline-flex items-center'
    >
      <Cart />
      <span className='text-white text-xl'>Cart</span>
    </button>
  );
};
