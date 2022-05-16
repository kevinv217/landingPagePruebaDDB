"use strict";

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("lpName").value;
  let email = document.getElementById("lpEmail").value;
  let typeDocument = document.getElementById("lpTypeDocument");
  let numberDocument = document.getElementById("lpNumberDocument").value;
  let phone = document.getElementById("lpPhone").value;
  let verify = document.getElementById("lpCheck").checked;

  let valorSeleccionado =
    typeDocument.options[typeDocument.selectedIndex].value;
  let textoSeleccionado = typeDocument.options[typeDocument.selectedIndex].text;

  let datosSelectSeleccionado = [valorSeleccionado, textoSeleccionado];

  let verifyCheck = verify === true ? "Si" : "No";

  let newdatos = `
    nombre: ${name}
    correo: ${email}
    Tipo de documento: ${datosSelectSeleccionado[1]}
    N° Documento: ${numberDocument}
    Movil: ${phone}
    verificado: ${verifyCheck}
    `;

  console.log(newdatos);

  return alert(newdatos);
});
