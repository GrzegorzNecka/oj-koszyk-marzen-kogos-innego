// Import stylesheets
import "./style.css";

import drawContent from "./drawContent";
import findParent from "./findParent";
import showSummary from "./showSummary";

const container = document.querySelector(".flex.flex-col");

const products = [
  {
    name: 'Kurs "Opanuj JavaScript"',
    description: "Kurs programowania",
    price: 399,
    img: "https://i.picsum.photos/id/160/200/150.jpg",
    id: 1,
    multiply: 1,
    isOrdered: true
  },
  {
    name: "Mentoring z Przemkiem",
    description: "Indywidualne konsultacje",
    price: 150,
    img: "https://i.picsum.photos/id/450/200/150.jpg",
    id: 2,
    multiply: 1,
    isOrdered: true
  }
];
const summaryContainer = document.querySelector("span.font-bold");

drawContent(container, products, summaryContainer);

const closeButtons = document.querySelectorAll(".js-button");
const multiplyInputs = document.querySelectorAll(".js-input");

closeButtons.forEach(button =>
  button.addEventListener("click", e => deleteItem(e))
);

multiplyInputs.forEach(input =>
  input.addEventListener("change", e => handleChange(e))
);

function handleChange(e) {
  const element = findParent(e.target);
  const prodID = parseInt(element.id);
  products.forEach(product => {
    if (product.id === prodID) {
      product.multiply = e.target.value;
    }
  });

  showSummary(summaryContainer, products, container);
}

function deleteItem(e) {
  const elementToDelete = findParent(e.target);
  const prodID = parseInt(elementToDelete.id);
  products.forEach(product => {
    if (product.id === prodID) product.isOrdered = false;
  });
  container.removeChild(elementToDelete);

  showSummary(summaryContainer, products, container);
}
