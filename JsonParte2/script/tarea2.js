const boton = document.querySelector("#boton");
const campo = document.querySelector("#campo");
const lista = document.querySelector("#lista");

boton.addEventListener("click", function () {
  const tarea = document.createTextNode(campo.value);
  if (tarea !== "") {
    const li = document.createElement("li");
    li.appendChild(tarea);
    lista.appendChild(li);
    campo.value = "";
  }
});
