import checkIsEmpty from "./checkIsEmpty";

function calculateTotalPrice(products, container) {
  const isEmpty = checkIsEmpty(products);
  const priceTable = [];
  let totalPrice;

  if (isEmpty) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>Koszyk jest pusty</h2>`;
    container.appendChild(div);
    return (totalPrice = 0);
  }

  products.forEach(product => {
    const { price, multiply, isOrdered } = product;

    if (isOrdered) priceTable.push(price * multiply);
  });

  if (priceTable.length > 1) {
    totalPrice = priceTable.reduce((prev, current) => {
      return prev + current;
    }, 0);
  } else {
    totalPrice = priceTable[0];
  }

  return totalPrice;
}

export default calculateTotalPrice;
