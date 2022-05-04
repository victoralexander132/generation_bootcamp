const urlTop = 'https://api.jikan.moe/v4/top/anime';
const $listaTop = document.getElementById('listaTop');

fetch(urlTop)
	.then((response) => response.json())
	.then((datos) => {
		const animesTop = datos.data.slice(0, 8);
		animesTop.map((anime) => {
			// console.log(anime);
			const infoAnime = {
				nombre: anime.title,
			};
			const template = `
      <a href="#" class="list-group-item list-group-item-action">${infoAnime.nombre}</a>
      `;
			$listaTop.innerHTML += template;
		});
	});
