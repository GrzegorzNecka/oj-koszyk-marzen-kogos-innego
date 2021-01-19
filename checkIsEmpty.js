function checkIsEmpty(products) {
  const isEmpty = products.findIndex(product => product.isOrdered);
  return isEmpty === -1 ? true : false;
}

export default checkIsEmpty;
