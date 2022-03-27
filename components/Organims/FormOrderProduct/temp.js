export const product = {
  sizes: [
    { medida: "12", price: 0 },
    {
      medida: "15",
      price: 0,
    },
    { medida: "18", price: 0 },
  ],
  price: 8.99,
  stock: 1000,
  crusts: [
    { name: "Thin Crust", price: 0 },
    { name: "Stuffed Crust", price: 0 },
    { name: "Deep Dish", price: 0 },
  ],
  extras: [
    { name: "Chesse", price: 1 },
    { name: "Pepperoni", price: 1 },
    { name: "Sausage", price: 0.5 },
    { name: "Mushrooms", price: 0.5 },
    { name: "Onions", price: 0.6 },
    { name: "Green Peppers", price: 0.4 },
    { name: "Other ", price: 0.2 },
    { name: "Potatos", price: 1.5 },
  ],
};
export const productOrder = {
  idProduct: "gmorv789vy789h789nj",
  name: "Jalapeno Angus Burger",
  priceUnit: 9.99,
  size: { medida: "18", price: 0 },
  img: "/images/Food/bacon-chesseburger.jpg",
  quantity: 2,
  customOptions: {
    negativeAddons: [
      {
        name: "No Chesse",
        price: 1,
      },
      {
        name: "Extra Cheddar",
        price: 1,
      },
      {
        name: "Extra Cheddar",
        price: 1,
      },
    ],
    extraToppings: [
      { name: "Mushrooms", price: 0.5 },
      { name: "Onions", price: 0.6 },
    ],
    crusts: { name: "Deep Dish", price: 0 },
  },
};
