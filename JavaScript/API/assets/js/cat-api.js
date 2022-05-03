const url = "https://api.thecatapi.com/v1/images/search";
const $img = document.getElementById('gatito');

async function obtenerGatito() {
  const response = await fetch(url);
  const gatito = await response.json();
  $img.src = gatito[0].url;  
}
