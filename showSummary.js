import calculateTotalPrice from "./calculateTotalPrice";

function showSummary(summaryContainer, products, container) {
  summaryContainer.textContent = `${calculateTotalPrice(
    products,
    container
  )} zł`;
}

export default showSummary;
