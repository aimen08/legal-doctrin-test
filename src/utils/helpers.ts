export function pricePoundFormat(price: number) {
  return new Intl.NumberFormat(
    'en-GB', // BCP 47 language tag
    {
      style: 'currency', // we want a currency
      currency: 'GBP', // ISO 4217 currency code
    }
  ).format(price);
}
