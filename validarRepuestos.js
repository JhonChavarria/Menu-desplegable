// VALIDACION DEL PRIMER FORMULARIO DE "REPUESTOS.HTML"
function validar() {
  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const cantidad = document.getElementById("cantidad");

  var letters = /^[A-Za-z]+$/;
  var Vprecio = /^[0-9]+$/;

  if (nombre.value == "" || precio.value == "" || cantidad.value == "") {
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
  } else if (!Vprecio.test(precio.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Precio incorrecto",
    });
  } else if (!Vprecio.test(cantidad.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Cantidad incorrecta",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Repuesto agregado!",
    });
  }
}

// VALIDACION DEL SEGUNDO FORMULARIO DE "REPUESTOS.HTML"
function validar2() {
  const nombre2 = document.getElementById("nombre2");
  const precio2 = document.getElementById("precio2");
  const cantidad2 = document.getElementById("cantidad2");

  var letters = /^[A-Za-z]+$/;
  var Vprecio = /^[0-9]+$/;

  if (nombre2.value == "" || precio2.value == "" || cantidad2.value == "") {
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
  } else if (!Vprecio.test(precio2.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Precio incorrecto",
    });
  } else if (!Vprecio.test(cantidad2.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Cantidad incorrecta",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Repuesto editado!",
    });
  }
}
