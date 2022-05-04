const busquedaInf = window.location.href.split('=').pop();
const busquedaAnimes = document.getElementById('busquedaAnimes');
const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`;
fetch(urlBusqueda)
	.then((response) => response.json())
	.then((datos) => {
		const infoBusqueda = datos.data.slice(0, 16);
		// console.log(infoBusqueda);
		infoBusqueda.map((anime) => {
			// console.log(anime);
			const datosNecesarios = {
				nombre: anime.title,
				imagen: anime.images.jpg.image_url,
			};
			// console.log(datosNecesarios);
			const template = `
      <div class="col mb-4">
        <div class="card">
          <img src="${datosNecesarios.imagen}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${datosNecesarios.nombre}</h5>
          </div>
        </div>
      </div>
      `;
			busquedaAnimes.innerHTML += template;
		});
	});
