function findParent(element) {
  // console.log(element.id);

  //jeśli warunek jest prawdą, polecenia w bloku są wykonywane. Jeśli nie jest, sterowanie przepływa do pierwszego polecenia za pętlą.

  while (!element.id) {
    //jeśli element.id === false
    // console.log(element);
    // console.log("parent", element.parentNode);
    element = element.parentNode;
  }
  // console.log(element);
  return element;
}
export default findParent;
