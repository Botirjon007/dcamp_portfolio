// cart.js

// Define an initial empty cart
let cart = [];

// Function to add an item to the cart
export const addToCart = (item) => {
  // Check if the item already exists in the cart
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    // If the item exists, update its quantity
    cart[existingItemIndex].quantity += 1;
  } else {
    // If the item doesn't exist, add it to the cart
    cart.push({ ...item, quantity: 1 });
  }
};

// Function to get the current cart
export const getCart = () => {
  return cart;
};

// Function to clear the cart
export const clearCart = () => {
  cart = [];
};


