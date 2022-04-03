import { OptionFood } from "./OptionFood";
export function Options({ listOptions, title }) {
  return (
    <div>
      <p className="option-bold">{title}</p>
      {listOptions.map((option, index) => {
        return (
          <OptionFood
            key={index}
            optionName={option.name}
            price={option.price}
          />
        );
      })}
    </div>
  );
}
