const principal = document.querySelector("#videojuegos");

const url = "../json/videojuegos.json";

async function cargarJSON() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    generaListaJuegos(data);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function generaListaJuegos(videojuegos) {
  for (let i = 0; i < videojuegos.length; i++) {
    console.log(videojuegos[i]);
    const videojuegoSection = document.createElement("section");
    const VideojuegoNombre = document.createElement("h3");
    const VideojuegoEstudio = document.createElement("h3");
    const VideojuegoAnyio = document.createElement("h3");
    VideojuegoNombre.append(document.createTextNode(videojuegos[i].nombre));
    VideojuegoEstudio.append(
      document.createTextNode(videojuegos[i]["estudio"]),
    );
    VideojuegoAnyio.append(
      document.createTextNode(videojuegos[i]["fecha_lanzamiento"]),
    );
    videojuegoSection.append(
      VideojuegoNombre,
      VideojuegoEstudio,
      VideojuegoAnyio,
    );
    const VideojuegoPlataformasDiv = document.createElement("div");
    VideojuegoPlataformasDiv.setAttribute("id", "plataformas");
    for (let j = 0; j < videojuegos[i].plataformas.length; j++) {
      const span = document.createElement("span");
      span.append(document.createTextNode(videojuegos[i].plataformas[j]));
      VideojuegoPlataformasDiv.append(span);
    }
    videojuegoSection.append(VideojuegoPlataformasDiv);
    const VideojuegoArticle = document.createElement("article");
    for (let k = 0; k < videojuegos[i].valoraciones.length; k++) {
      const divValoracion = document.createElement("div");
      divValoracion.classList.add("valoracion");
      const divGamer = document.createElement("div");
      const divJugabilidad = document.createElement("div");
      const divDiseño = document.createElement("div");
      const divHistoria = document.createElement("div");
      divGamer.append(
        document.createTextNode(
          "Gamer: " + videojuegos[i].valoraciones[k].Gamer,
        ),
      );
      divJugabilidad.append(
        document.createTextNode(
          "Jugabilidad: " + videojuegos[i].valoraciones[k].Jugabilidad,
        ),
      );
      divDiseño.append(
        document.createTextNode(
          "Diseño: " + videojuegos[i].valoraciones[k].Diseño,
        ),
      );
      divHistoria.append(
        document.createTextNode(
          "Historia: " + videojuegos[i].valoraciones[k].Historia,
        ),
      );
      divValoracion.append(divGamer, divJugabilidad, divDiseño, divHistoria);
      VideojuegoArticle.append(divValoracion);
    }
    const VideojuegoFoto = document.createElement("img");
    VideojuegoFoto.setAttribute("src", videojuegos[i].foto);
    VideojuegoFoto.setAttribute("class", "foto-videojuego");
    videojuegoSection.append(VideojuegoFoto);
    videojuegoSection.append(VideojuegoArticle);
    videojuegoSection.append(VideojuegoArticle);
    principal.append(videojuegoSection);
  }
}
