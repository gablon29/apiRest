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

export const validationName = (name) => {
  if (name.length < 3) {
    return "El nombre debe tener al menos 3 caracteres";
  }
  if (name.length > 30) {
    return "El nombre no debe tener mas de 30 caracteres";
  }
  if (!/^[a-zA-Z ]+$/.test(name)) {
    return "El nombre solo debe contener letras";
  }
  return null;
}