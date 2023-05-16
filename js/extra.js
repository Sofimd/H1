function imagenApi() {
  const imgUno = document.getElementById("tarjetas-comentarios");

  for (let i = 0; i < 4; i++) {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        imgUno.innerHTML += `
          <section class="tarjeta">
          <img
            src="${data.results[0].picture.large}"
            alt=""
            width="100"
            height="100"
          />
          <section class="tarjeta-texto">
            <h5>${data.results[0].name.first}</h5>
            <p>"Lorem ipsum, dolor sit amet consectetur adipisicing."</p>
          </section>
        </section>
          `;
      });
  }
}
