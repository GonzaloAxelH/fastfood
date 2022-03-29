import usePriceFormat from "../../../Hooks/usePriceFormat";
function ShowPrice({ label, priceQuantity }) {
  const price = usePriceFormat(priceQuantity);
  return (
    <div>
      <p>
        {label} :
        <span>
          {price.intPrice}
          <sup>.{price === 0 ? "00" : price.decimalPrice}</sup>
        </span>
      </p>
    </div>
  );
}
export default ShowPrice;
