// LISTAR LOS REGISTROS EN LA TABLA

function saveInfo(id_cliente, nombre_cliente, cedula_cliente, email, direccion_cliente, telefono_cliente ) {
  document.getElementById('idE').value = id_cliente;
  document.getElementById('nombreE').value = nombre_cliente; 
  document.getElementById('cedulaE').value = cedula_cliente;
  document.getElementById('direccionE').value = email;
  document.getElementById('telefonoE').value = direccion_cliente;
  document.getElementById('emailE').value =telefono_cliente;
}


async function getInfo() {
  const url = 'http://localhost:9000/api/clientes';
  const response = await fetch(url);
  const jsonData = await response.json();

  const tableBody = document.getElementById("user-list");

  jsonData.forEach(cliente => {
      tableBody.innerHTML += `
          <tr>
              <td scope="col">${cliente.id_cliente}</td>
              <td scope="col">${cliente.nombre_cliente}</td>
              <td scope="col">${cliente.cedula_cliente}</td>
              <td scope="col">${cliente.email}</td>
              <td scope="col">${cliente.direccion_cliente}</td>
              <td scope="col">${cliente.telefono_cliente}</td>
              <td scope="col">
                  <a href="#" class="Editar" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="saveInfo(${cliente.id_cliente}, ${cliente.nombre_cliente},${cliente.cedula_cliente}, ${cliente.email}, ${cliente.direccion_cliente},${cliente.telefono_cliente});">
                      <i class="fa-solid fa-pen-to-square"></i>
                  </a>
                  <i class="fa-solid fa-power-off" style="cursor: pointer" onclick="eliminarDato(${cliente.id_cliente});"></i>
              </td>
          </tr>
      `;
  });
}

getInfo();


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
 async function guardar(){
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
    const id = document.getElementById('idE').value;
    const nombre= document.getElementById('nombreE').value;
    const cedula = document.getElementById('cedulaE').value;
    const direccion = document.getElementById('direccionE').value;
    const telefono = document.getElementById('telefonoE').value;
    const email = document.getElementById('emailE').value;
    console.log("Hola!!")

    const data = {
        id_cliente : id,
        nombre_cliente : nombre,
        cedula_cliente : cedula,
        email : email,
        direccion_cliente : direccion,
        telefono_cliente : telefono,

    };

    const url = `http://localhost:9000/api/cliente/${id}`;

    const response = await fetch(url, {
        method: "POST", // DELETE // PUT // POST
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // CON DELETE SE QUITA ESTA LINEA
    });
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

async function eliminarDato(id) {
  console.log(id);
  const url = `http://localhost:9000/api/cliente/${id}`;

  const response = await fetch(url, {
      method: "DELETE", // DELETE // PUT // POST
  });
}

async function crearCliente() {
  const data = [];

  const id_cliente = document.getElementById("id").value;
  const nombre_cliente = document.getElementById("nombre").value;
  const cedula_cliente = document.getElementById("cedula").value;
  const email = document.getElementById("email").value;
  const direccion_cliente = document.getElementById("direccion").value;
  const telefono_cliente = document.getElementById("telefono").value;

  let auxData = {
    id_cliente: id_cliente,
    nombre_cliente: nombre_cliente,
    cedula_cliente: cedula_cliente,
    email: email,
    direccion_cliente: direccion_cliente,
    telefono_cliente: telefono_cliente
  };
  data.push(auxData);

  const url = 'http://localhost:9000/api/clientes';

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (response.ok) {
    window.location.href = 'clientes.html';
  } else {
    console.error('Error al crear la compra');
  }
}

