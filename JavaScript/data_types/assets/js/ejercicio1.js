year = prompt('¿En qué año naciste?')
console.log(`Tienes ${2022-year} años`);


var boton = document.getElementById('boton');
boton.addEventListener('click', () => {
  let year = document.getElementById('year').value;
  console.log(`Tienes ${2022-year} años`);
});