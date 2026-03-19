const principal = document.querySelector("#mensajes");

const url = "../JSON/datos2.json";

async function cargarJSON() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    generaMensaje(data);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function generaMensaje(datosMensaje) {
  for (let i = 0; i < datosMensaje.length; i++) {
    console.log(datosMensaje);

    const section_agrupador = document.createElement("section");
    const div_personas = document.createElement("div");
    const h3_para = document.createElement("h3");
    const h3_de = document.createElement("h3");

    const texto_para = document.createTextNode("Para: " + datosMensaje[i].para);
    const texto_de = document.createTextNode("De: " + datosMensaje[i].de);

    h3_para.append(texto_para);
    h3_de.append(texto_de);

    div_personas.append(h3_para, h3_de);

    const div_mensaje = document.createElement("div");
    const p_titulo = document.createElement("p");
    const p_contenido = document.createElement("p");

    const texto_titulo = document.createTextNode(datosMensaje[i].titulo);
    const texto_contenido = document.createTextNode(datosMensaje[i].contenido);

    p_titulo.append(texto_titulo);
    p_contenido.append(texto_contenido);

    div_mensaje.append(p_titulo, p_contenido);

    section_agrupador.append(div_personas, div_mensaje);

    principal.append(section_agrupador);
  }
}
