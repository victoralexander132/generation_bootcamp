const db = [
  {
    url: "https://placeimg.com/200/200/animals",
    title: "Animales",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/tech",
    title: "Tecnología",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/people",
    title: "Personas",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/nature",
    title: "Naturaleza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/arch",
    title: "Arquitectura",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
];

const $cards = document.getElementById("cards");
$cards.innerHTML = "";

db.forEach((objeto) => {
  $cards.innerHTML += `
  <div class="col mb-4">
  <div class="card">
    <img src=${objeto.url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${objeto.title}</h5>
      <p class="card-text">${objeto.desc}</p>
    </div>
  </div>
  `;
});

// Convertir JSON a string
const dbJSON = JSON.stringify(db);
// Convertir nuevamente a JSON
console.log(JSON.parse(dbJSON));