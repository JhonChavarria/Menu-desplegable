// funcion que nos ayudara a validar los datos
function Agregar(){
    let nombre = document.getElementById('nombre').value;
    let cedula = document.getElementById('cedula').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    var regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Expresión regular para validar solo letras y espacios
    var regex_num = /^[0-9]+$/;// Expresión regular para validar que la cédula solo contenga números
    var regex_direc = /^[a-zA-Z0-9\s]+$/;
    var regex_tele = /^\d+$/;// Expresión regular para validar que el teléfono solo contenga números
    var regex_digi = /^\d{10}$/; // Expresión regular para validar que el teléfono solo contenga dígitos y tenga una longitud de 10
    var email_val =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(nombre=='' || cedula=='' || direccion=='' ||email=='' || telefono==''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese informacion en los campos vacios'
      })


      // alert("Ingrese informacion en los campos vacios");

  }else if (!regex.test(nombre)) {
        // Si el nombre está vacío o no cumple con el patrón de letras, mostrar un mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingresa un nombre válido.'
        })
        // alert("Por favor, ingresa un nombre válido.");

    }else if (!regex_num.test(cedula)) {
        // Comprueba si la cédula cumple con el formato numérico
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingresar solo numeros en el campo de la cedula'
        })
        //alert("Por favor, ingresar solo numeros en el campo de la cedula");
  
    }else if (!regex_digi.test(cedula)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo 10 digitos en el campo cedula'
      })
      // alert("Por favor, ingresar solo 10 digitos en el campo cedula");

    }else if (!regex_direc.test(direccion)) {
      // Comprueba si la dirección cumple con el formato especificado
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo numeros, letras, un solo numeral y un solo guion. Ejem: Calle 123-A'
      });
      // alert("Por favor, ingresar solo numeros, letras, un solo numeral y un solo guion. Ejem: Calle 123-A");
  
    }else if(!email_val.test(email)){ //validar por si no es correo
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese el formato de email correcto'
      });
      //alert("Ingrese el formato de email correcto");

    }else if (!regex_tele.test(telefono)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo numero en el campo telefono'
      });
      // alert("Por favor, ingresar solo numero en el campo telefono");

    }else if (!regex_digi.test(telefono)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo 10 digitos en el campo telefono'
      });
      //alert("Por favor, ingresar solo 10 digitos en el campo telefono ");

    }else{
      Swal.fire({
        title: 'Cliente agregado!',
        text: 'Se agregó correctamente!',
        icon: 'success'
      }).then((result) => {
        if (result.isConfirmed) {
          // Cerrar el formulario aquí
          document.getElementById('formulario').reset();
          window.location.href = 'clientes.html';
        }
      });
  }
}

function guardar(){
    let nombre = document.getElementById('nombre').value;
    let cedula = document.getElementById('cedula').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    var regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Expresión regular para validar solo letras y espacios
    var regex_num = /^[0-9]+$/;// Expresión regular para validar que la cédula solo contenga números
    var regex_direc = /^[a-zA-Z0-9]+\s[0-9]+-[0-9a-zA-Z]+$/;
    var regex_tele = /^\d+$/;// Expresión regular para validar que el teléfono solo contenga números
    var regex_digi = /^\d{10}$/; // Expresión regular para validar que el teléfono solo contenga dígitos y tenga una longitud de 10
    var email_val =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(nombre=='' || cedula=='' || direccion=='' ||email=='' || telefono==''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese informacion en los campos vacios'
      })


      // alert("Ingrese informacion en los campos vacios");

  }else if (!regex.test(nombre)) {
        // Si el nombre está vacío o no cumple con el patrón de letras, mostrar un mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingresa un nombre válido.'
        })
        // alert("Por favor, ingresa un nombre válido.");

    }else if (!regex_num.test(cedula)) {
        // Comprueba si la cédula cumple con el formato numérico
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingresar solo numeros en el campo de la cedula'
        })
        //alert("Por favor, ingresar solo numeros en el campo de la cedula");
  
    }else if (!regex_digi.test(cedula)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo 10 digitos en el campo cedula'
      })
      // alert("Por favor, ingresar solo 10 digitos en el campo cedula");

    }else if (!regex_direc.test(direccion)) {
      // Comprueba si la dirección cumple con el formato especificado
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo numeros, letras, un solo numeral y un solo guion. Ejem: Calle 123-A'
      });
      // alert("Por favor, ingresar solo numeros, letras, un solo numeral y un solo guion. Ejem: Calle 123-A");
  
    }else if(!email_val.test(email)){ //validar por si no es correo
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese el formato de email correcto'
      });
      //alert("Ingrese el formato de email correcto");

    }else if (!regex_tele.test(telefono)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo numero en el campo telefono'
      });
      // alert("Por favor, ingresar solo numero en el campo telefono");

    }else if (!regex_digi.test(telefono)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresar solo 10 digitos en el campo telefono'
      });
      //alert("Por favor, ingresar solo 10 digitos en el campo telefono ");

    }else{
      Swal.fire({
        title: 'Cliente agregado!',
        text: 'Se agregó correctamente!',
        icon: 'success'
      }).then((result) => {
        if (result.isConfirmed) {
          // Cerrar el formulario aquí
          document.getElementById('formulario').reset();
          window.location.href = 'clientes.html';
        }if(modalcancelar){
          document.getElementById('formulario').reset();
        }
      });
  }

}

function cancelar(){
  // Cerrar el formulario aquí
        document.getElementById('formulario').reset();
        window.location.href = 'clientes.html';
      
  }


  