// VALIDACIÓN DEL PRIMER FORMULARIO DE "SERVICIOS.HTML"
function validar1() {
  const nombre = document.getElementById("nombre");
  const descripcion = document.getElementById("descripcion");

  const letters = /^[A-Za-z]+$/;

  if (nombre.value == "" || descripcion.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Llenar los campos",
    });
  } else if (!letters.test(nombre.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre incorrecto",
    });
  } else if (!letters.test(descripcion.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Descripción incorrecta",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Servicio Agregado!",
    });
  }
}

// VALIDACIÓN DEL SEGUNDO FORMULARIO DE "SERVICIOS.HTML"
function validar2() {
  const nombre2 = document.getElementById("nombre2");
  const descripcion2 = document.getElementById("descripcion2");

  const letters = /^[A-Za-z]+$/;

  if (nombre2.value == "" || descripcion2.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Llenar los campos",
    });
  } else if (!letters.test(nombre2.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre incorrecto",
    });
  } else if (!letters.test(descripcion2.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Descripción incorrecta",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Servicio Editado!",
    });
  }
}
