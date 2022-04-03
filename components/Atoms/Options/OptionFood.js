export function OptionFood({ optionName, price }) {
  return (
    <p>
      {optionName}
      <span>
        {price} <sup>.00</sup>
      </span>
    </p>
  );
}
