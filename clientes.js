function swalAlert(icon,title,text){
  Swal.fire({
    icon: icon,
    title: title,
    text: text
  })
}

// funcion que nos ayudara a validar los datos
async function Agregar(){ 
    let nombre = document.getElementById('nombre').value;
    let cedula = document.getElementById('cedula').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    var regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ][A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/; // Expresión regular para validar solo letras y espacios y valida que el primer campo no sea un espacio
    var regex_num = /^[0-9]+$/;// Expresión regular para validar que la cédula solo contenga números
    var regex_direc = /^[a-zA-Z]+(\s*)?[0-9a-zA-Z\s]*#[a-zA-Z0-9]+-[a-zA-Z0-9]+$/;
    var regex_tele = /^\d+$/;// Expresión regular para validar que el teléfono solo contenga números
    var regex_digi = /^\d{10}$/; // Expresión regular para validar que el teléfono solo contenga dígitos y tenga una longitud de 10
    var email_val =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(nombre=='' || cedula=='' || direccion=='' ||email=='' || telefono==''){
      
      swalAlert('error','Oops...','Ingrese informacion en los campos vacios')

  }else if (!regex.test(nombre)) {
        // Si el nombre está vacío o no cumple con el patrón de letras, mostrar un mensaje de error
        swalAlert('error','Oops...','Por favor, ingresa un nombre válido.')
  
  }else if (!regex_num.test(cedula)) {
        // Comprueba si la cédula cumple con el formato numérico
        swalAlert('error','Oops...','ingresar solo numeros en el campo de la cedula')
        
  
  }else if ( document.getElementById("cedula").value.length < 7 ){//para validar la longitud de la cedula
    swalAlert('error','Oops...','Cedula Incorrecta. Minimo 7 caracteres')

  }else if ( document.getElementById("cedula").value.length > 10){
    swalAlert('error','Oops...','Cedula Incorrecta. Maximo 10 caracteres')

  }else if (!regex_direc.test(direccion)) {
      // Comprueba si la dirección cumple con el formato especificado
        swalAlert('error','Oops...','ingresar solo numeros, letras, un solo numeral y un solo guion. Ejem: Calle 123-A')
  
  }else if(!email_val.test(email)){ //validar por si no es correo
     
        swalAlert('error','Oops...','Ingrese el formato de email correcto')

  }else if (!regex_tele.test(telefono)) {
    
        swalAlert('error','Oops...','ingresar solo numero en el campo telefono')

  }else if ( document.getElementById("telefono").value.length < 7 ){//para validar la longitud de la telefono
    swalAlert('error','Oops...','Telefono Incorrecta. Minimo 7 caracteres')

  }else if ( document.getElementById("telefono").value.length > 10){
    swalAlert('error','Oops...','Telefono Incorrecta. Maximo 10 caracteres')

  }else{
    
       swalAlert('success','Cliente agregado!','Se agregó correctamente!')
       document.getElementById('formulario').reset();
       const response = await fetch("http://localhost:9000/api/user");
       const jsonData = await response.json();
       console.log(jsonData);
  }
 }
function guardar(){
    let nombre = document.getElementById('nombreE').value;
    let cedula = document.getElementById('cedulaE').value;
    let direccion = document.getElementById('direccionE').value;
    let telefono = document.getElementById('telefonoE').value;
    let email = document.getElementById('emailE').value;
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

} else if (!regex.test(nombre)) {
      // Si el nombre está vacío o no cumple con el patrón de letras, mostrar un mensaje de error
      swalAlert('error','Oops...','Por favor, ingresa un nombre válido.')
      // alert("Por favor, ingresa un nombre válido.");

  }else if (!regex_num.test(cedula)) {
      // Comprueba si la cédula cumple con el formato numérico
      swalAlert('error','Oops...','ingresar solo numeros en el campo de la cedula')
      //alert("Por favor, ingresar solo numeros en el campo de la cedula");

  }else if ( document.getElementById("cedulaE").value.length < 7 ){//para validar la longitud de la cedula
    swalAlert('error','Oops...','Cedula Incorrecta. Minimo 7 caracteres')

  }else if ( document.getElementById("cedulaE").value.length > 10){
    swalAlert('error','Oops...','Cedula Incorrecta. Maximo 10 caracteres')
    
  }else if (!regex_direc.test(direccion)) {
    // Comprueba si la dirección cumple con el formato especificado
    swalAlert('error','Oops...','ingresar solo numeros, letras, un solo numeral y un solo guion. Ejem: Calle 123-A')
    // alert("Por favor, ingresar solo numeros, letras, un solo numeral y un solo guion. Ejem: Calle 123-A");

  }else if(!email_val.test(email)){ //validar por si no es correo
    swalAlert('error','Oops...','Ingrese el formato de email correcto')
    //alert("Ingrese el formato de email correcto");

  }else if (!regex_tele.test(telefono)) {
    swalAlert('error','Oops...','ingresar solo numero en el campo telefono')
    // alert("Por favor, ingresar solo numero en el campo telefono");

  }else if ( document.getElementById("telefonoE").value.length < 7 ){//para validar la longitud de la telefono
    swalAlert('error','Oops...','Telefono Incorrecta. Minimo 7 caracteres')

  }else if ( document.getElementById("telefonoE").value.length > 10){
    swalAlert('error','Oops...','Telefono Incorrecta. Maximo 10 caracteres')

  }else{
    Swal.fire({
      title: 'Cliente actualizado!',
      text: 'Se actualizó correctamente!',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'clientes.html';
      }
    });
}

}

function cancelar(){
// Cerrar el formulario aquí
      document.getElementById('formulario').reset();
      window.location.href = 'clientes.html';
    
}



