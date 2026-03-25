const json = "../json/videojuegos.json";

async function cargarJSON() {
  try {
    const response = await fetch(json);
    const datosDejuegos = await response.json();

    generaCatalogo(datosDejuegos);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function generaCatalogo(datosDejuegos) {
  for (let i = 0; i < datosDejuegos.length; i++) {
    console.log(datosDejuegos[i]);
    
  }
}
