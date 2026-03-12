const datos = [
  { alumno: "Ana", n1: 7, n2: 9 },
  { alumno: "Luis", n1: 8, n2: 6 },
  { alumno: "Marta", n1: 10, n2: 9 },
];
const columnas = ["Alumno", "Nota 1", "Nota 2"];
const filas = ["alumno", "n1", "n2"];
const boton = document.querySelector("#boton");
boton.addEventListener("click", function () {
  const tabla = document.createElement("table");
  tabla.className = "tabla-notas";
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  for (let i = 0; i < columnas.length; i++) {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(columnas[i]));
    th.style.border = "2px solid #6a6a6a";
    trHead.appendChild(th);
  }
  thead.appendChild(trHead);
  tabla.appendChild(thead);
  const tbody = document.createElement("tbody");
  for (let f = 0; f < datos.length; f++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < filas.length; c++) {
      const td = document.createElement("td");
      td.style.border = "2px solid #6a6a6a";
      const texto = document.createTextNode(datos[f][filas[c]]);
      td.appendChild(texto);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  tabla.appendChild(tbody);
  tabla.style.border = "2px solid #999";
  tabla.style.borderRadius = "8px";
  tabla.style.padding = "12px";
  tabla.style.margin = "20px auto";
  tabla.style.display = "inline-block";
  document.body.appendChild(tabla);
});
