// funcion que nos ayudara a validar los datos
function swalAlert(icon,title,text){
    Swal.fire({
      icon: icon,
      title: title,
      text: text
    })
}

// funcion que nos ayudara a validar los datos
function AgregarU(){
    // let id = ( listUsua > 0) ? listUsua : (table.length +1);
    let nombre = document.getElementById('nombreU').value;
    let email = document.getElementById('emailU').value;
    let contraseña = document.getElementById('contrasenaU').value;
    let rol = document.getElementById('rolU').value;
    let confirmar = document.getElementById('confirmarU').value;
    
    var regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ][A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/; // Expresión regular para validar solo letras y espacios y valida que el primer campo no sea un espacio
    var email_val =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  
    if(nombre==''|| email==''  || contraseña=='' || rol=='' || confirmar==''){
      
        swalAlert('error','Oops...','Ingrese informacion en los campos vacios')
  
    }else if (!regex.test(nombre)) {
        // Si el nombre está vacío o no cumple con el patrón de letras, mostrar un mensaje de error
        swalAlert('error','Oops...','Por favor, ingresa un nombre válido.')
        
    }else if(!email_val.test(email)){ //validar por si no es correo
     
        swalAlert('error','Oops...','Ingrese el formato de email correcto')

    }else if ( document.getElementById("contrasenaU").value.length < 6 ){//para validar la longitud de la contraseña
        swalAlert('error','Oops...','Contraseña Incorrecta. Minimo 6 caracteres')

    }else if ( document.getElementById("contrasenaU").value.length > 12){
        swalAlert('error','Oops...','Contraseña Incorrecta. Maximo 12 caracteres')

    }
    else if(rol == "Seleccione un Rol"){ //para validar que el rol no este vacio
        swalAlert('error','Oops...','Selecione un rol')
        
    }
    else if ( document.getElementById("confirmarU").value.length < 6 ){
        swalAlert('error','Oops...','Confirmar contraseña Incorrecta. Minimo 6 caracteres')

    }else if ( document.getElementById("confirmarU").value.length > 12){
        swalAlert('error','Oops...','Confirmar contraseña Incorrecta. Maximo 12 caracteres')

    }else if(contraseña !== confirmar){
        swalAlert('error','Oops...','Las contraseñas no coinciden');
        contraseña.value = ""; // Limpiar el campo de contraseña
        confirmar.value = ""; // Limpiar el campo de confirmación de contraseña
        contraseña.focus(); // Enfocar el campo de contraseña para corregirlo

    }else{
    Swal.fire({
      title: 'Usuario agregado!',
      text: 'Se agrego correctamente!',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'usuarios.html';
      }
    });
    }
}

  function cancelarU(){
    // Cerrar el formulario aquí
        document.getElementById('nombreU').reset();
        document.getElementById('emailU').reset();
        document.getElementById('contrasenaU').reset();
        document.getElementById('rolU').reset();
        document.getElementById('confirmarU').reset();  
        window.location.href = 'usuarios.html';
        
    }

    function GuardarU(){
        // let id = ( listUsua > 0) ? listUsua : (table.length +1);
        let nombre = document.getElementById('nombreUE').value;
        let email = document.getElementById('emailUE').value;
        let contraseña = document.getElementById('contrasenaUE').value;
        let rol = document.getElementById('rolUE').value;
        let confirmar = document.getElementById('confirmarUE').value;
        
        var regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ][A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/; // Expresión regular para validar solo letras y espacios y valida que el primer campo no sea un espacio
        var email_val =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
      
        if(nombre==''|| email==''  || contraseña=='' || rol=='' || confirmar==''){
          
            swalAlert('error','Oops...','Ingrese informacion en los campos vacios')
      
        }else if (!regex.test(nombre)) {
            // Si el nombre está vacío o no cumple con el patrón de letras, mostrar un mensaje de error
            swalAlert('error','Oops...','Por favor, ingresa un nombre válido.')
            
        }else if(!email_val.test(email)){ //validar por si no es correo
         
            swalAlert('error','Oops...','Ingrese el formato de email correcto')
    
        }else if ( document.getElementById("contrasenaUE").value.length < 6 ){//para validar la longitud de la contraseña
            swalAlert('error','Oops...','Contraseña Incorrecta. Minimo 6 caracteres')
    
        }else if ( document.getElementById("contrasenaUE").value.length > 12){
            swalAlert('error','Oops...','Contraseña Incorrecta. Maximo 12 caracteres')
    
        }
        else if(rol == "Seleccione un Rol"){ //para validar que el rol no este vacio
            swalAlert('error','Oops...','Selecione un rol')
            
        }
        else if ( document.getElementById("confirmarUE").value.length < 6 ){
            swalAlert('error','Oops...','Confirmar contraseña Incorrecta. Minimo 6 caracteres')
    
        }else if ( document.getElementById("confirmarUE").value.length > 12){
            swalAlert('error','Oops...','Confirmar contraseña Incorrecta. Maximo 12 caracteres')
    
        }else if(contraseña !== confirmar){
            swalAlert('error','Oops...','Las contraseñas no coinciden');
            contraseña.value = ""; // Limpiar el campo de contraseña
            confirmar.value = ""; // Limpiar el campo de confirmación de contraseña
            contraseña.focus(); // Enfocar el campo de contraseña para corregirlo
    
        }else{
        Swal.fire({
          title: 'Usuario actualizado!',
          text: 'Se actualizó correctamente!',
          icon: 'success'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'usuarios.html';
          }
        });
        }
    }
    
