export default function usePriceFormat(price) {
  const pricefixed = parseFloat(price).toFixed(2);
  const intPrice = String(pricefixed).split(".")[0];
  const decimalPrice = String(pricefixed).toString().split(".")[1];

  return {
    intPrice,
    decimalPrice,
  };
}
