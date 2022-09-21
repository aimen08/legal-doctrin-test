import { number } from 'zod';
import { ItemCartProps } from '../components/CartItem';

/** This function returns formated Pound Price
 *  @param {number} price - a number.
 *  . */
export function pricePoundFormat(price: number) {
  return new Intl.NumberFormat(
    'en-GB', // BCP 47 language tag
    {
      style: 'currency', // we want a currency
      currency: 'GBP', // ISO 4217 currency code
    }
  ).format(price);
}

/** This function checks if item exist in array
 *  @param {ItemCartProps} data - array of items in cart
 *  @param {string} name - name of item searching for.
 *  . */
export function existInArray(data: ItemCartProps[], name: string) {
  return data.some((element) => {
    if (element.name === name) {
      return true;
    }
    return false;
  });
}
