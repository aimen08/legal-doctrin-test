import Image from 'next/image'
import { Rating } from './Rating';
import { AddButton } from './AddButton';
import { pricePoundFormat } from '../utils/helpers';

export type ItemCardProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
};

export const ItemCard = ({
  name,
  description,
  price,
  image,
  rating,
}: ItemCardProps) => {
  return (
    <div className='flex flex-row m-5 justify-between p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105'>
      <section className='flex flex-row'>
        <Image src={image} alt={name} width="90" height="80" />
        <section className='ml-4' >
          <h2 className="text-lg font-bold text-gray-700">{name}</h2>
          <p className="text-sm text-gray-600 break-words">{description}</p>
        </section>
      </section>


      <section className='ml-2 '>
        <Rating />
        <h2 className='text-xl font-bold text-gray-700 text-right mb-2'>{pricePoundFormat(price)}</h2>
        <AddButton />
      </section>
    </div>



  );
};