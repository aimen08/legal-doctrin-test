import { action, Action } from 'easy-peasy';

interface Cart {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartModel {
  data: Cart[];
  addItem: Action<this, Cart>;
}
const model: CartModel = {
  data: [],
  addItem: action((state, payload) => {
    state.data.push(payload);
  }),
};

export default model;
