import { MouseEventHandler } from 'react';
import { useStoreState } from '../store/hooks';
import { pricePoundFormat } from '../utils/helpers';
import { CartItem } from './CartItem';
import { Cart } from './icons/Cart';
import { ItemCardProps } from './ItemCard';

export default function Drawer({
  isOpen,
  drawerToggle,
}: {
  isOpen: boolean;
  drawerToggle: MouseEventHandler<HTMLButtonElement>;
}): any {
  {
    const items = useStoreState((state) => state.cart.data);
    const subTotal = useStoreState((state) => state.cart.subtotal);
    const total = useStoreState((state) => state.cart.total);
    return (
      <main
        className={
          ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
          (isOpen
            ? '  transition-opacity opacity-100 duration-500 translate-x-0  '
            : '  delay-100 opacity-0 translate-x-full')
        }
      >
        <section
          className={
            ' w-screen max-w-lg right-0 absolute bg-gray-200 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
            (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
          }
        >
          <article className='relative  w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full'>
            <div className='flex flex-row items-center m-10'>
              <header className='p-4 font-bold text-3xl'>CART</header>
              <Cart />
            </div>

            <ul className='mx-4  divide-y-2 divide-gray-300'>
              {items.map((item, index) => (
                <li key={index}>
                  <CartItem {...item} />
                </li>
              ))}
            </ul>
            <div className='border-t-2 border-gray-300 mx-4' />
            <div className='flex flex-col mx-4 items-end '>
              <h2 className='text-lg font-bold text-gray-600'>Subtotal</h2>
              <h2 className='text-lg font-bold text-black mb-3'>
                {pricePoundFormat(subTotal)}
              </h2>
              <h2 className='text-lg font-bold text-gray-600'>Discount</h2>
              <h2 className='text-lg font-bold text-black mb-3'>
                {pricePoundFormat(subTotal - total)}
              </h2>
              <h2 className='text-lg font-bold text-gray-600'>Total</h2>
              <h2 className='text-lg font-bold text-black mb-3'>
                {pricePoundFormat(total)}
              </h2>
            </div>
          </article>
        </section>
        <section
          className=' w-screen h-full cursor-pointer '
          onClick={drawerToggle}
        ></section>
      </main>
    );
  }
}
