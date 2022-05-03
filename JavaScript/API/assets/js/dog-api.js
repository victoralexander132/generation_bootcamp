const url = "https://dog.ceo/api/breeds/image/random";
const $img = document.getElementById('perrito');
const $img2 = document.getElementById('perrito2');

fetch(url).then(respuesta => respuesta.json()).then(datos => {
  console.log(datos);
  $img.src = datos.message
})

async function obtenerPerrito(){
  const infoPerritos = await fetch(url);
  console.log(infoPerritos);
  const perrito = await infoPerritos.json();
  console.log(perrito);
  $img2.src = perrito.message;
}

obtenerPerrito()