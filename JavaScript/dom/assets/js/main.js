/* Este es un nodo de comentario */
const $titulo = document.querySelector('h1');
const $parr = document. querySelector('p');
const $card = document.querySelector('.card');

/* nodeName */
console.log($parr.nodeName);
console.log($titulo.nodeName);

/* textContent */
$parr.textContent += "Hola Mundo!";
console.log($parr.textContent);

$titulo.textContent = "Modificando elementos con JavaScript";

//innerText - mejor no usarla

// innerHTML

console.log($parr.innerHTML);

$parr.innerHTML = '<a href="#">Este es un enlace</a>';
// reemplaza lo que hay dentro del elemento seleccionado


// outerHTML
$parr.outerHTML = "<a href=\"#\">Este es un enlace</a>";
// reemplaza todo, incluido el elemento seleccionado


// Crear elementos de html /* Document hace referencia a todo el html */
function crearElemento() {
  const img = document.createElement("img");
  img.src = "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg"
  // appendChild
  $card.appendChild(img);
}

crearElemento();