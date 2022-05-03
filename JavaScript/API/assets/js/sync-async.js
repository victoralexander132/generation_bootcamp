// let tiempo = 3000;
// let datos

// setTimeout(() => {
//   datos = "Victor"
//   console.log(datos);
// }, tiempo);

// console.log(datos);
// console.log("G lou");

const datos = [
  {
    nombre: "Víctor",
    edad: 26,
  },
  {
    nombre: "Luis",
    edad: 32,
  },
  {
    nombre: "Saul",
    edad: 18,
  },
];



function obtenerDatos(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(datos)
    }, 1000)
  })
}


obtenerDatos().then((datos) => {
  console.log(datos)
})

async function obtenerDatosAsync(){
  const datosObtenidos = await obtenerDatos()
  console.log(datosObtenidos);
}

obtenerDatosAsync()