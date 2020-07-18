const elementContainer = (name, classesToAdd, id) => {
  const elementContainer = document.createElement(name);
  if (classesToAdd !== undefined) elementContainer.classList.add(...classesToAdd);
  if (id !== undefined) elementContainer.setAttribute('id', id);
  return elementContainer;
};
export default elementContainer;
