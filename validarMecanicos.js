// function validar1() {
//   const nombre = document.getElementById("nombre");
//   const cedula = document.getElementById("cedula");
//   const direccion = document.getElementById("direccion");
//   const telefono = document.getElementById("telefono");

//   var letters = /^[A-Za-z]+$/;
//   var Vdireccion = /^[a-zA-Z0-9]+\s[0-9]+-[0-9a-zA-Z]+$/;
//   var Vtelefono = /^\d+$/;
//   var Vcedula = /^[0-9]+$/;

//   if (nombre.value == "" || cedula.value == "" || direccion.value == "" || telefono.value =="") {

//      Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Llenar los campos",
//   });
//   }
//   // Swal.fire({
//   //   icon: "error",
//   //   title: "Oops...",
//   //   text: "Llenar los campos",
//   // });
//   else if (!letters.test(nombre.value)) {
//     // Swal.fire({
//     //   icon: "error",
//     //   title: "Oops...",
//     //   text: "Nombre incorrecto",
//     // });
//   } else if (!Vcedula.test(cedula.value)) {
//     // Swal.fire({
//     //   icon: "error",
//     //   title: "Oops...",
//     //   text: "Cédula incorrecta",
//     // });
//   } else if (!Vdireccion.test(direccion.value)) {
//     // Swal.fire({
//     //   icon: "error",
//     //   title: "Oops...",
//     //   text: "Dirección incorrecta",
//     // });
//   } else if (!Vtelefono.test(telefono.value)) {
//     // Swal.fire({
//     //   icon: "error",
//     //   title: "Oops...",
//     //   text: "Telefono incorrecto",
//     // });
//   }
// }

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   var letters = /^[A-Za-z]+$/;

//   if(nombre.value ==""){
//     alert("Llenar los campos")
//   }
// });

function validar1() {
  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;
  const direccion = document.getElementById("direccion").value;

  var Vnombre = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Expresión regular para validar solo letras y espacios
  var Vcedula = /^[0-9]+$/; // Expresión regular para validar que la cédula solo contenga números
  var Vdireccion = /^[a-zA-Z0-9\s]+$/;
  //   var Vtelefono = /^\d+$/; // Expresión regular para validar que el teléfono solo contenga números
  var Vtelefono = /^\d{10}$/; // Expresión regular para validar que el teléfono solo contenga dígitos y tenga una longitud de 10
  var email_val =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (nombre == "" || cedula == "" || direccion == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese informacion en los campos vacios",
    });
  } else if (!Vnombre.test(nombre)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nombre incorrect",
    });
  } else if (!Vcedula.test(cedula)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Cédula incorrecta",
    });
  } else if (!Vdireccion.test("direccion")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Direccion incorrecta",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Mecánico agregado!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Cerrar el formulario aquí
        document.getElementById("formulario").reset();
        window.location.href = "mecanicos.html";
      }
    });
  }
}

function validar2() {
  const nombre2 = document.getElementById("nombre2").value;
  const cedula2 = document.getElementById("cedula2").value;
  const direccion2 = document.getElementById("direccion2").value;

  var Vnombre = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Expresión regular para validar solo letras y espacios
  var Vcedula = /^[0-9]+$/; // Expresión regular para validar que la cédula solo contenga números
  var Vdireccion = /^[a-zA-Z0-9\s]+$/;
  //   var Vtelefono = /^\d+$/; // Expresión regular para validar que el teléfono solo contenga números
  var Vtelefono = /^\d{10}$/; // Expresión regular para validar que el teléfono solo contenga dígitos y tenga una longitud de 10
  var email_val =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (nombre2 == "" || cedula2 == "" || direccion2 == "") {
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
  } else if (!Vcedula.test(cedula2)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Cédula incorrecta",
    });
  } else if (!Vdireccion.test("direccion2")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Direccion incorrecta",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Excelente",
      text: "¡Mecánico editado!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Cerrar el formulario aquí
        document.getElementById("formulario").reset();
        window.location.href = "mecanicos.html";
      }
    });
  }
}
