function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  if (customerCredits < totalPrice) {
    message = 'Insufficient funds!';
  } else {
    customerCredits -= totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }

  // Change code above this line
  return message;
}