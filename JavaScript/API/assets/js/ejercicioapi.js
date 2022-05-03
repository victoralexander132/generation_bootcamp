const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
const $cont = document.getElementById("cont");

fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    datos.map((dato) => {
      const template = `
        <div class="col mb-4">
          <div class="card">
            <img src="${dato.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dato.id}</h5>
              <p class="card-text">${dato.title}.</p>
            </div>
          </div>
        </div>
        `;
      $cont.innerHTML += template;
    });
      });
