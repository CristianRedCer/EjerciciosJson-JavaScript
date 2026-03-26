const datos = document.querySelector("#datos");
const excursiones = document.querySelector("#excursiones");
const url = "../json/Redondo_Cervantes_ofertas.json";
async function cargarDatos() {
  try {
    const direccionJson = await fetch(url);
    const datosJson = await direccionJson.json();
    recuperarDatos(datosJson);
  } catch (error) {
    console.log("Error cargando el Json: " + error);
  }
}
cargarDatos();
function recuperarDatos(datosJson) {
  const h1nombre = document.createElement("h1");
  const h1texto = document.createTextNode(datosJson.nombre);
  const divinformacion = document.createElement("div");
  const h2info = document.createElement("h2");
  const h2texto = document.createTextNode("Información del contacto");
  const pTelefono = document.createElement("p");
  const pTelefonoTexto = document.createTextNode("Teléfono: " + datosJson.informacion.telefono);
  const pEmail = document.createElement("p");
  const pEmailTexto = document.createTextNode("Email: " + datosJson.informacion.email);
  h1nombre.append(h1texto);
  h2info.append(h2texto);
  pTelefono.append(pTelefonoTexto);
  pEmail.append(pEmailTexto);
  divinformacion.append(h2info);
  divinformacion.append(pTelefono);
  divinformacion.append(pEmail);
  datos.append(h1nombre);
  datos.append(divinformacion);

  for (let i = 0; i < datosJson.excursiones.length; i++) {
    const cardExcursion = document.createElement("card");
    const h3nombre = document.createElement("h3");
    const h3texto = document.createTextNode(datosJson.excursiones[i].destino);
    const h3pais = document.createElement("h3");
    const h3paisTexto = document.createTextNode(datosJson.excursiones[i].pais);
    const h3precio = document.createElement("h3");
    const h3precioTexto = document.createTextNode(datosJson.excursiones[i].precio);
    const divactividades = document.createElement("div");
    for (let j = 0; j < datosJson.excursiones[i].actividades.length; j++) {
        const spanactividad = document.createElement("span");
        const spanactividadTexto = document.createTextNode(datosJson.excursiones[i].actividades[j]);
        spanactividad.append(spanactividadTexto);
        divactividades.append(spanactividad);
    }
    h3nombre.append(h3texto);
    h3pais.append(h3paisTexto);
    h3precio.append(h3precioTexto);
    cardExcursion.append(h3nombre);
    cardExcursion.append(h3pais);
    cardExcursion.append(h3precio);
    cardExcursion.append(divactividades);
    excursiones.append(cardExcursion);
  }
}
