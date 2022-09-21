import { ItemCardProps } from '../../components/ItemCard';

export interface ItemsModel {
  data: ItemCardProps[];
}

const model: ItemsModel = {
  data: [
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
  ],
};

export default model;
