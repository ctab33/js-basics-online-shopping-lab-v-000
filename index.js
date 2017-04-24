var cart = [];


function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 0)) + 0;

    var cartContents = {[item]:price};
    cart.push(cartContents);
    console.log (`${item} has been added to your cart.`);
      return cart;
}

function viewCart() {
 itemAndPrice = cart [i];
 var item;
 item = Object.keys(itemAndPrice)[0];
 var price;
 price = itemAndPrice[item];
  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.");
  } else {
    for (var i in cart) {
      console.log (`In your cart, you have ${item} at ${price}.`);
  }
  }
}

function total() {
  // write your code here
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t;
}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {
  // write your code here
}
