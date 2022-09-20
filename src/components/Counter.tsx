export const Counter = () => {
  return (
    <div className='flex flex-row gap-2 items-center '>
      <button className='rounded-full w-7 border border-black h-7 font-bold hover:bg-gray-400'>
        -
      </button>
      <span className='font-bold'>1</span>
      <button className='rounded-full w-7 border border-black h-7 font-bold hover:bg-gray-400'>
        +
      </button>
    </div>
  );
};
