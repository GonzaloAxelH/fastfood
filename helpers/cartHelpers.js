export const nameFormat = (name) => {
  const nameProductFormat = String(name)
    .split(" ")
    .map((el) => el.toLowerCase())
    .join("-");

  return nameProductFormat;
};

export const getNumberPrice = (price) => String(price).split(".")[0];
export const getDecimalPrice = (price) => String(price).split(".")[1];
