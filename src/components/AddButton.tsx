import { MouseEventHandler } from 'react';

export const AddButton = ({
  handleAddButton,
}: {
  handleAddButton: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={handleAddButton}
      className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded'
    >
      ADD TO CART
    </button>
  );
};
