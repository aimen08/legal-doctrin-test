import { ItemCardProps } from './ItemCard';
import Image from 'next/image';
import { pricePoundFormat } from '../utils/helpers';
import { useState } from 'react';
import { Counter } from './Counter';

export const CartItem = (item: ItemCardProps) => {
  const [quality, setQuntity] = useState(1);

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
            <Counter />
          </section>
        </section>
      </section>
      <h2 className='text-lg font-bold text-gray-700'>
        {pricePoundFormat(item.price)}
      </h2>
    </div>
  );
};
