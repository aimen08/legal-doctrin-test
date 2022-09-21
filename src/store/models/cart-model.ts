import {
  action,
  Action,
  actionOn,
  ActionOn,
  computed,
  Computed,
} from 'easy-peasy';
import { existInArray } from '../../utils/helpers';

interface Cart {
  name: string;
  price: number;
  image: string;
  totalPrice?: number;
  quantity: number;
}

// this is where all the requsesed business logic happen

export interface CartModel {
  data: Cart[];
  subtotal: Computed<this, number>;
  total: Computed<this, number>;
  discounted: ActionOn<this>;
  addItem: Action<this, Cart>;
  quantityMutate: Action<this, Cart>;
}

const model: CartModel = {
  data: [],
  subtotal: computed((state) => {
    if (state.data.length > 0) {
      return state.data.reduce((accumulator, object) => {
        return accumulator + object.price * object.quantity;
      }, 0);
    }
    return 0;
  }),
  total: computed((state) => {
    if (state.data.length > 0) {
      return state.data.reduce((accumulator, object) => {
        return accumulator + object.totalPrice!;
      }, 0);
    }
    return 0;
  }),
  // this action gets called when item is added to cart
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
  // this action gets called every time there is possibility of discount either in milk or bread
  discounted: actionOn(
    (actions) => actions.quantityMutate,
    (state, target) => {
      state.data = state.data.map((element) => {
        let quant = 0;
        if (element.name.includes('bread')) {
          const butter = state.data.find((item) => {
            if (item.name.includes('Butter') && item.quantity >= 2) {
              quant = item.quantity;
              return true;
            }
          });
          if (butter) {
            return {
              ...element,
              totalPrice:
                element.price * element.quantity -
                element.price * Math.floor(quant / 2) * 0.5,
            };
          } else {
            return { ...element, totalPrice: element.price * element.quantity };
          }
        }

        if (element.name.includes('milk')) {
          if (element.quantity / 4 >= 1) {
            return {
              ...element,
              totalPrice:
                element.price * element.quantity -
                Math.floor(element.quantity / 4) * element.price,
            };
          } else {
            return { ...element, totalPrice: element.price * element.quantity };
          }
        }
        return element;
      });
    }
  ),
  // this action gets called every time the user INC or DEC one of the items in the cart
  quantityMutate: action((state, payload) => {
    state.data = state.data.map((element) => {
      if (element.name === payload.name) {
        return {
          ...element,
          price: payload.price,
          quantity: payload.quantity,
          totalPrice: payload.quantity * payload.price,
        };
      }
      return element;
    });
  }),
};

export default model;
