export const formatMoney = (price: number) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  if (price % 100 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = new Intl.NumberFormat('us-EN', options);
  return formatter.format(price / 100);
};
