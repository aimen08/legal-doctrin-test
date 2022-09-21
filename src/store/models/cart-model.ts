import { action, Action, computed, Computed } from 'easy-peasy';
import { existInArray } from '../../utils/helpers';

interface Cart {
  name: string;
  price: number;
  image: string;
  totalPrice?: number;
  quantity: number;
}

export interface CartModel {
  data: Cart[];
  subtotal: Computed<this, number>;
  total: Computed<this, number>;
  addItem: Action<this, Cart>;
  quantityMutate: Action<this, Cart>;
}
const model: CartModel = {
  data: [],
  subtotal: computed((state) => {
    if (state.data.length > 0) {
      return state.data.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);
    }
    return 0;
  }),
  total: computed((state) => {
    if (state.data.length > 0) {
      return state.data.reduce((accumulator, object) => {
        return accumulator + object.totalPrice!!;
      }, 0);
    }
    return 0;
  }),
  addItem: action((state, payload) => {
    if (!existInArray(state.data, payload.name)) {
      state.data.push({
        name: payload.name,
        price: payload.price,
        image: payload.image,
        quantity: payload.quantity,
        totalPrice: payload.price * payload.quantity,
      });
    }
  }),
  quantityMutate: action((state, payload) => {}),
};

export default model;