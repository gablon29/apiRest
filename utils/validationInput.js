export const validation = (obj) => {
  let element = "";
  for (const key in obj) {
    if (obj[key] === "") {
      element = `La propiedad ${key} esta vacia`;
      return element;
    }
  }

  return element;
};
