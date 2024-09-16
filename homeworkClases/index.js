class Motor {
  #potencia;
  constructor(potencia) {
    this.#potencia = potencia;
  }
  getPotencia() {
    return this.#potencia;
  }
  setPotencia(potencia) {
    this.#potencia = potencia;
  }
}

class Vehiculo {
  // Completá el código
  #precio;
  #motor;
  constructor(marca, modelo, precio, motor) {
    this.marca = marca;
    this.modelo = modelo;
    this.#precio = precio;
    this.#motor = new Motor(motor);
  }
  //* Getters
  getMarca() {
    return this.marca;
  }
  getModelo() {
    return this.modelo;
  }
  getPrecio() {
    return this.#precio;
  }
  getMotor() {
    return this.#motor.getPotencia();
  }
  //* Setters
  setMarca(marca) {
    this.marca = marca;
  }
  setModelo(modelo) {
    this.modelo = modelo;
  }
  setPrecio(precio) {
    this.#precio = precio;
  }
  setMotor(motor) {
    this.#motor.setPotencia(motor);
  }
  // * static method
  static getVehiculos() {
    return "Vehiculos";
  }
  static comparacionVehiculos(vehiculo1, vehiculo2) {
    return vehiculo1.getPrecio() > vehiculo2.getPrecio()
      ? vehiculo1
      : vehiculo2;
  }
  getDetail() {
    return {
      marca: this.marca,
      modelo: this.modelo,
      precio: this.#precio,
      motor: this.#motor.getPotencia(),
    };
  }
}

const gol = new Vehiculo("tesla", "2014", 30000, 1000);
const onix = new Vehiculo("chevrolet", "2018", 20000, 500);
console.log(gol.getDetail()); // { marca: 'tesla', modelo: '2014', precio: 30000, motor: 1000 }
console.log(gol.getMarca()); // tesla
console.log(onix.getModelo()); // 2018
console.log(Vehiculo.comparacionVehiculos(gol, onix)); // { marca: 'chevrolet', modelo: '2018', precio: 20000 }
//* heradacion
class Coche extends Vehiculo {
  #puertas;
  constructor(marca, modelo, precio, puertas) {
    super(marca, modelo, precio);
    this.#puertas = puertas;
  }
  getPuertas() {
    return this.#puertas;
  }
  setPuertas(puertas) {
    this.#puertas = puertas;
  }
  getDetail() {
    return {
      Marca: this.marca,
      Modelo: this.modelo,
      Precio: this.getPrecio(),
      Puertas: this.#puertas,
    };
  }
}

const maverik = new Coche("ford", "1972", 30000, 2);
console.log(maverik.getDetail()); // Marca: ford, Modelo: 1972, Precio: 30000, Puertas: 2

class Motocicleta extends Vehiculo {
  #cilindrada;
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.#cilindrada = cilindrada;
  }
  getCilindrada() {
    return this.#cilindrada;
  }
  setCilindrada(cilindrada) {
    this.#cilindrada = cilindrada;
  }
  getDetail() {
    return {
      Marca: this.marca,
      Modelo: this.modelo,
      Precio: this.getPrecio(),
      Cilindrada: this.#cilindrada,
    };
  }
}

const honda = new Motocicleta("honda", "2010", 10000, 150);
console.log(honda.getDetail()); // Marca: honda, Modelo: 2010, Precio: 10000, Cilindrada: 150
