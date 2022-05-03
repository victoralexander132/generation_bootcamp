const url = 'https://dog.ceo/api/breeds/list/all';
const lista = document.querySelector('ul');

fetch(url)
  .then(response => response.json())
    .then(datos =>{
      datos.message.terrier.map((tipoTerrier)=>{
        const template = `<li class="list-group-item">${tipoTerrier}</li>`;
        lista.innerHTML += template;
      })
});