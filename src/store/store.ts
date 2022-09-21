import { createStore } from 'easy-peasy';
import itemsModel, { ItemsModel } from './models/items-model';
import cartModel, { CartModel } from './models/cart-model';

export interface Model {
  items: ItemsModel;
  cart: CartModel;
}

const model = {
  items: itemsModel,
  cart: cartModel,
};

export const store = createStore(model);
