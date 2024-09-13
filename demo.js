function contador(inicio, paso) {
  let count = inicio - paso;
  return function () {
    count += paso;
    return count;
  };
}

function saludo(saludo) {
  return function (nombre) {
    return `${saludo} ${nombre}`;
  };
}

function tablaMultiplicarX2(numero) {
  return function (num) {
    return num * numero;
  };
}

// funcio clousure con arreglo
function arreglo(arreglo) {
  var i = 1;
  return function () {
    arreglo.push(i);
    i++;
    return arreglo;
  };
}
const arreglo1 = arreglo([]);
console.log(arreglo1());
console.log(arreglo1());

const saludoHola = saludo("hola");
const saludoAdios = saludo("adios");
console.log(saludoHola("gabriel"));
console.log(saludoAdios("Juan"));
const contador1 = contador(10, 5);
console.log(contador1()); // 0
console.log(contador1()); // 1
console.log(contador1()); // 2
const tablaDel3 = tablaMultiplicarX2(3);
console.log(tablaDel3(2)); // 10
console.log(tablaDel3(3)); // 15

// * prototipos en js

// * Herencia en js con clases

class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  sonido() {
    return "sonido";
  }

  saludar() {
    return `Hola soy ${this.nombre} y soy un ${this.especie}`;
  }
}

class PerroClase extends Animal {
  #tetas; // propiedades privadas de la clase
  #edad; // propiedades privadas de la clase
  constructor(nombre, edad, raza, tetas) {
    super(nombre, "Perro");
    this.#edad = edad;
    this.raza = raza;
    this.#tetas = tetas;
  }
  // metodos privados de la clase
  setTetas(tetas) {
    this.#tetas = tetas;
  }
  getTetas() {
    return this.#tetas;
  }
  getedad() {
    return this.#edad;
  }
  saludo() {
    return `Hola soy ${this.nombre} y soy un perro`;
  }
  // metodos estaticos
  static ladrar() {
    console.log("guau guau");
  }
}
PerroClase.ladrar();
const perroMalo = new PerroClase("Julio", 2, "Pitbull", 10);
perroMalo.nombre = "Julito";
perroMalo.raza = "Pitbull";
console.log(perroMalo.saludo());
console.log(perroMalo.getTetas());
console.log(perroMalo.raza);
console.log(perroMalo.getedad());
// * Herencia en js con prototipos y funciones constructoras

function Perro(nombre) {
  this.nombre = nombre;
}

Perro.prototype.saludo = function () {
  console.log(`Hola soy ${this.nombre} y soy un perro`);
};

const perro = new Animal("Firulais", "Perro");
console.log(perro.saludar());

const perro1 = new Perro("Firulais");
perro1.saludo();
