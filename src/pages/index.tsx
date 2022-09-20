import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { CartButton } from '../components/CartButton';
import Drawer from '../components/Drawer';
import { ItemCard, ItemCardProps } from '../components/ItemCard';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerToggle = () => {
    setIsOpen(!isOpen);
  };
  const items: ItemCardProps[] = [
    {
      name: 'Whole french bread',
      description: 'made in paris and destinated to the whole world',
      price: 1.0,
      rating: 4,
      image: '/bread.png',
    },
    {
      name: 'Fresh Suiss milk',
      description:
        'semi skimmed milk that comes straight from the alpes farmers',
      price: 1.15,
      rating: 4,
      image: '/milk.png',
    },
    {
      name: 'Butter',
      description: 'produced by us to insure high quality butter',
      price: 0.8,
      rating: 4,
      image: '/butter.png',
    },
  ];

  return (
    <>
      <Head>
        <title>Legal Doctrin Test</title>
        <meta name='description' content='legal-doctrin-test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-4'>
        <h1 className='text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700'>
          Store <span className='text-purple-300'>Products</span>
        </h1>

        <CartButton drawerToggle={drawerToggle} />

        <div className='flex'>
          <ul>
            {items.map((item, index): any => (
              <li key={index}>
                <ItemCard {...item} />
              </li>
            ))}
          </ul>
        </div>

        <Drawer
          isOpen={isOpen}
          drawerToggle={drawerToggle}
          children={undefined}
        ></Drawer>
      </main>
    </>
  );
};

export default Home;
