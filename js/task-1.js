function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  console.log(totalPrice);
  const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  console.log(message);
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
