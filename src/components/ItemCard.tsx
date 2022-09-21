import Image from 'next/image';
import { Rating } from './Rating';
import { AddButton } from './AddButton';
import { pricePoundFormat } from '../utils/helpers';
import { useStoreActions } from '../store/hooks';

export type ItemCardProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
};

export const ItemCard = ({ item }: { item: ItemCardProps }) => {
  const addItem = useStoreActions((actions) => actions.cart.addItem);

  const handleAddButton = () => {
    addItem({
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <div className='flex flex-row m-5 justify-between p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105'>
      <section className='flex flex-row'>
        <Image src={item.image} alt={item.name} width='90' height='80' />
        <section className='ml-4'>
          <h2 className='text-lg font-bold text-gray-700'>{item.name}</h2>
          <p className='text-sm text-gray-600 break-words'>
            {item.description}
          </p>
        </section>
      </section>

      <section className='ml-2 '>
        <Rating />
        <h2 className='text-xl font-bold text-gray-700 text-right mb-2'>
          {pricePoundFormat(item.price)}
        </h2>
        <AddButton handleAddButton={handleAddButton} />
      </section>
    </div>
  );
};
