function findParent(element) {
  while (!element.id) {
    element = element.parentNode;
  }
  return element;
}
export default findParent;
