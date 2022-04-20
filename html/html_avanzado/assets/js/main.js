const color = document.querySelector("#inputColor");
color.addEventListener("change", e => {
    document.body.style.backgroundColor = e.target.value;
});

const formulario = document.querySelector("#formularioDatos");

formulario.addEventListener("submit", e => {
    // Para parar el proceso en lo que se validan los datos del sumbit
    e.preventDefault()
    const datos = Object.fromEntries(
        new FormData(e.target)
        )
        console.log(datos);
});
