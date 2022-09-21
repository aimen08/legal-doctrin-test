import Image from 'next/image';
import { pricePoundFormat } from '../utils/helpers';
import { useState } from 'react';
import { Counter } from './Counter';
import { useStoreActions } from '../store/hooks';

export type ItemCartProps = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  totalPrice?: number;
};

export const CartItem = (item: ItemCartProps) => {
  const quantityMutate = useStoreActions(
    (actions) => actions.cart.quantityMutate
  );

  const handleQuantity = (STATE: string) => {
    if (STATE === 'INC') {
      quantityMutate({
        name: item.name,
        quantity: item.quantity + 1,
        price: item.price,
        image: item.image,
      });
    } else if (STATE === 'DEC') {
      if (item.quantity > 1) {
        quantityMutate({
          name: item.name,
          quantity: item.quantity - 1,
          price: item.price,
          image: item.image,
        });
      }
    }
  };
  return (
    <div className='flex flex-row m-6 items-center justify-between'>
      <section className='flex flex-row items-center'>
        <div className='rounded-full max-w-full h-auto ring-2 p-1 flex items-center ring-gray-400'>
          <Image
            className=' rounded-full max-w-full h-auto '
            src={item.image}
            alt={item.name}
            width='90'
            height='90'
          />
        </div>

        <section className='ml-5'>
          <h2 className='text-base font-bold text-gray-700'>{item.name}</h2>
          <section className='flex flex-row gap-11 mt-2'>
            <h2 className='text-base font-medium text-gray-700'>quantity</h2>
            <Counter quantity={item.quantity} handleQuantity={handleQuantity} />
          </section>
        </section>
      </section>
      <h2 className='text-lg font-bold text-gray-700'>
        {pricePoundFormat(item.totalPrice!!)}
      </h2>
    </div>
  );
};
