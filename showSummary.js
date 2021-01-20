import calculateTotalPrice from "./calculateTotalPrice";

function showSummary(summaryContainer, products, container) {

console.log(summaryContainer)
console.log(products)
console.log(container)


  summaryContainer.textContent = `${calculateTotalPrice(
    products,
    container
  )} zł`;
}

export default showSummary;
