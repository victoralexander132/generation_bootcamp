// Seleccionar elemento del html con clase padre
const $padre = document.querySelector(".padre");
console.log($padre);
// Crear un elemento nuevo
const $parr = document.createElement("p");
console.log($parr);
// Añadir texto al elemento $parr
$parr.textContent += "Lorem ipsum";
$parr.textContent += " Lorem ipsum";
$parr.textContent += " Lorem ipsum";
// Agregar el elemento $parr al elemento $padre
$padre.appendChild($parr);

// Agregar elementos con innerHTML

const $cuadro = document.querySelector(".cuadro");
$cuadro.innerHTML = "";

$cuadro.innerHTML = `
                    <a href="#">Este es un enlace</a>
                    <ol>
                      <li>Elemento 1</li>
                      <li>Elemento 2</li>
                      <li>Elemento 3</li>
                    </ol>
                    `;

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $lista = document.createElement("ul");
estaciones.forEach((estacion) => {
  const $li = document.createElement("li");
  $li.textContent = estacion;
  $lista.appendChild($li);
});
document.body.appendChild($lista);

/* ================================================================ */
const cont = ["África", "América", "Asia", "Europa", "Oceanía"];
const $ol = document.createElement("ol");
$cuadro.appendChild($ol);
cont.forEach((continente) => {
  $ol.innerHTML += `<li>${continente}</li>`;

});
