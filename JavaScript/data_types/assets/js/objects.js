const name = "Victor";
const name_2 = new String("Victor");
const persona = new Object();
persona.nombre = "Víctor";
persona.apellido = "Soto";
persona.edad = 26;

const nuevaPersona = {
  // Atributos o propiedades
  nombreCompleto: {
    nombre: "Manuel",
    apellido: "Alexander",
  },
  edad: 26,
  pasatiempos: ["anime", "leer", "tomar"],
  tieneTrabajo: false,
  // Método
  saludar: function () {
    console.log("Hola M");
  },
  suma: function (a, b) {
    console.log(`El resultado de la suma es ${a + b}`);
  },
};

"Hola".length; // Atributo
"Hola".toLowerCase(); // método

console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.edad);
console.log(nuevaPersona["nombreCompleto"]["nombre"]);
nuevaPersona.saludar();
nuevaPersona.suma(1, 2);

// Cambiar propiedades
nuevaPersona.edad = 8;
console.log(nuevaPersona.edad);
// Para agregar nuevo atributo
nuevaPersona.colorFavorito = "Azul";
console.log('colorFavorito' in nuevaPersona);
console.log(nuevaPersona.colorFavorito);

delete nuevaPersona.colorFavorito
console.log('colorFavorito' in nuevaPersona);
console.log(nuevaPersona.hasOwnProperty('colorFavorito'));

console.log(Object.keys(nuevaPersona));
console.log(Object.values(nuevaPersona));

const victor = {
  nombreCompleto: {
    nombre: "Víctor Manuel",
    apellido: "Soto Alexander",
  },
  edad: 26,
  pasatiempos: ["anime", "leer", "tomar"],
}