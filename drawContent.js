import calculateTotalPrice from "./calculateTotalPrice";
import showSummary from "./showSummary";

function drawContent(container, products, summaryContainer) {
  products.forEach(product => {
    const { name, description, price, img, id } = product;
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "items-center",
      "border-b",
      "border-dashed",
      "js-container"
    );
    div.id = product.id;
    div.innerHTML = `
   <div  class="flex-auto">
          <img class="w-10 rounded-sm overflow-hidden" src="${img}" alt="">
        </div>

        <div class="flex-auto px-5 py-3">
          <h2>${name}</h2>
          <p class="text-xs">${description}</p>
        </div>

        <div class="flex justify-end">
          <div class="border text-center mx-3"><input  class="w-10 js-input" type="number" value="1"></div>
          <div>${price} zł</div>
          <div class="pl-4 js-button"><i class="fas fa-times"></i></div>
        </div>
  `;
    container.appendChild(div);
  });

  showSummary(summaryContainer, products, container);
}
export default drawContent;
