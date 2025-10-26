function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const deliveryMessage = `Shipping to ${country} will cost ${totalPrice} credits`;
  return deliveryMessage;
}

console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));
console.log(getShippingMessage('Australia', 120, 50));
