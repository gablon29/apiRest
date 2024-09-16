function validationInput(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }
}

function createInput(input) {
  validationInput(input);
  return "Input creado con exito";
}

console.log(createInput("Hola Mundo"));
