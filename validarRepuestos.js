// // VALIDACION DEL PRIMER FORMULARIO DE "REPUESTOS.HTML"
// function validar1() {
//   const nombre = document.getElementById("nombre");
//   const precio = document.getElementById("precio");
//   const cantidad = document.getElementById("cantidad");

//   var letters = /^[A-Za-z]+$/;
//   var Vprecio = /^[0-9]+$/;

//   if (nombre.value == "" || precio.value == "" || cantidad.value == "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Llenar los campos",
//     });
//   } else if (!letters.test(nombre.value)) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Nombre incorrecto",
//     });
//   } else if (!Vprecio.test(precio.value)) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Precio incorrecto",
//     });
//   } else if (!Vprecio.test(cantidad.value)) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Cantidad incorrecta",
//     });
//   } else {
//     Swal.fire({
//       icon: "success",
//       title: "Excelente",
//       text: "¡Repuesto agregado!",
//     });
//   }
// }

// // VALIDACION DEL SEGUNDO FORMULARIO DE "REPUESTOS.HTML"
// function validar2() {
//   const nombre2 = document.getElementById("nombre2");
//   const precio2 = document.getElementById("precio2");
//   const cantidad2 = document.getElementById("cantidad2");

//   var letters = /^[A-Za-z]+$/;
//   var Vprecio = /^[0-9]+$/;

//   if (nombre2.value == "" || precio2.value == "" || cantidad2.value == "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Llenar los campos",
//     });
//   } else if (!letters.test(nombre2.value)) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Nombre incorrecto",
//     });
//   } else if (!Vprecio.test(precio2.value)) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Precio incorrecto",
//     });
//   } else if (!Vprecio.test(cantidad2.value)) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Cantidad incorrecta",
//     });
//   } else {
//     Swal.fire({
//       icon: "success",
//       title: "Excelente",
//       text: "¡Repuesto editado!",
//     });
//   }
// }



// VALIDACIÓN DEL PRIMER FORMULARIO DE SERVICIOS.HTML
function validar1() {
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const cantidad = document.getElementById("cantidad").value;



  var Vnombre = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Expresión regular para validar solo letras y espacios
  // var Vprecio = /($[0-9,]+(.[0-9]{2})?)/ // Expresión regular para validar precio

  if (nombre == "" || precio == "" || cantidad == "" ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese informacion en los campos vacios",
    });
  } else if (!Vnombre.test(nombre)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre incorrecto",
    });
  } else if (!Vprecio.test(precio)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Precio incorrecto",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Repuesto Agregado!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'respuestos.html';
      }
    })
  }

}

// VALIDACIÓN DEL SEGUNDO FORMULARIO DE SERVICIOS.HTML
function validar2() {
  const nombre2 = document.getElementById("nombre2").value;
  const precio2 = document.getElementById("precio2").value;
  const cantidad2 = document.getElementById("cantidad2").value


  var Vnombre = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Expresión regular para validar solo letras y espacios
  // var Vprecio = /($[0-9,]+(.[0-9]{2})?)/ // Expresión regular para validar precio
  

  if (nombre2 == "" || precio2 == "" || cantidad2 == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese informacion en los campos vacios",
    });
  } else if (!Vnombre.test(nombre2)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre incorrecto",
    });
  } else if (!Vprecio.test(precio2)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Precio incorrecto",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Repuesto editado!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'repuestos.html';
      }
    });
  }

}
  

// FUNCIÓN DE LIMPIAR FORMULARIOS
function cancelar() {
  // Cerrar el formulario aquí
  document.getElementById('formulario').reset();
  window.location.href = 'repuestos.html';


}

