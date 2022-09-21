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

/** we use easy peasy as state mangment check below link for more information
 * https://easy-peasy.dev/
 *  . */
export const store = createStore(model);
