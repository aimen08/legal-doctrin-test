import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { CartButton } from '../components/CartButton';
import Drawer from '../components/Drawer';
import { ItemCard } from '../components/ItemCard';
import { useStoreState } from '../store/hooks';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useStoreState((state) => state.items.data);

  const drawerToggle = () => {
    setIsOpen(!isOpen);
  };

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
                <ItemCard item={item} />
              </li>
            ))}
          </ul>
        </div>

        <Drawer isOpen={isOpen} drawerToggle={drawerToggle}></Drawer>
      </main>
    </>
  );
};

export default Home;
