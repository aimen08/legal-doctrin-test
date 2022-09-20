import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legal Doctrin Test</title>
        <meta name="description" content="legal-doctrin-test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Store <span className="text-purple-300">Products</span>
        </h1>
        
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
          
        </div>
      </main>
    </>
  );
};

export default Home;


