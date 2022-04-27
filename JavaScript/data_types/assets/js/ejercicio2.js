const Arantxa = { 
  nombreCompleto: {
  nombre: "Arantxa", 
  apellido: "Perez"
  },
  edad: 26,
  pasatiempos: ["caminar", "patinar", "musica"]}

const Alexander = {
  nombreCompleto: {
      nombre: "Alexander tovar",
      apellido: "martinez"
  },
  edad: 24,
  pasatiempos: ["descanzar","dibujar","plantas"]
}
  
const miriam ={
  /* atributos o propiedades: datos*/
  nombreCompleto:{ 
    nombre: "aketzali",
    apellido: "gonzalez" 
  },
  edad: 23,
  pasatiempos: ["pintar","leer","escribir"]
}

const Mitzi = {
  nombreCompleto: {
      nombre: "Mitzi",
      app: "Hernandez"
  },
  edad: 23,
  pasatiempos: ["jugar", "dibujar", "ver series"],
}

const victor = {
  nombreCompleto: {
    nombre: "Víctor Manuel",
    apellido: "Soto Alexander",
  },
  edad: 26,
  pasatiempos: ["anime", "leer", "tomar"],
}

const Jonathan = {
  nombreCompleto: {
      nombre: "Yair",
      apellido: "Uriostegui"
  },
  edad: 23,
  pasatiempos: ["nadar","dibujar","anime"]
}

const cohorte = [Jonathan, Mitzi, victor, miriam, Alexander, Arantxa];
console.log(cohorte);

for (let i = 0; i < cohorte.length; i++) {
  if (cohorte[i].pasatiempos.includes('dibujar')) {
    console.log(cohorte[i].nombreCompleto.nombre);
  } 
}

