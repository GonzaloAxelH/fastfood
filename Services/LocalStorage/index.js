export const saveCartLocal = (arrCart) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem("cart", JSON.stringify(arrCart));
  }
};

export const verifyLocalStorage = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return true;
    } else {
      return false;
    }
  }
};

export const getCartProductsLocal = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart"));
  }
};
