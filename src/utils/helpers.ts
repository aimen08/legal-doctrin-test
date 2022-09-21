import { number } from 'zod';
import { ItemCartProps } from '../components/CartItem';

export function pricePoundFormat(price: number) {
  return new Intl.NumberFormat(
    'en-GB', // BCP 47 language tag
    {
      style: 'currency', // we want a currency
      currency: 'GBP', // ISO 4217 currency code
    }
  ).format(price);
}

export function existInArray(data: ItemCartProps[], name: string) {
  return data.some((element) => {
    if (element.name === name) {
      return true;
    }
    return false;
  });
}
