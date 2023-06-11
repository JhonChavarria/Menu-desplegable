//Ejecutar funcion en el evento click

document.getElementById("btn_open").addEventListener("click", open_close_menu);
//Declarar las variables

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body"); 

//Evento para mostrar y ocultar el menu


function open_close_menu(){
    body.classList.toggle("body_move"); //vamos a body y le decimos que nos añada una clase mediante el evento toggle
    side_menu.classList.toggle("menu__side_move"); //vamos a side_menu y le decimos que nos añada una clase mediante el evento toggle

}

//si el ancho de la pagina es menor a 760px, ocultara el menu al recargar la pagina

if(window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__sade_move");
}

//Haciendo el menu responsive(adaptable)

window.addEventListener("resize", function(){

    if(window.innerWidth > 760){

        body.classList.remove("body_move") //que le elimine la clase body_move
        side_menu.classList.remove("menu__side_move") //que le elimine la clase menu__side_move
    }

    if(window.innerWidth < 760){

        body.classList.add("body_move") //que nos añada la clase body_move
        side_menu.classList.add("menu__side_move") //que nos añada la clase menu__side_move
    }


});

function navigateTo(page) {
    var frame = document.getElementById('content-frame');
    
    switch (page) {
      case 'Dashboard':
        frame.src = 'dashboard.html';
        break;
      case 'Usuarios':
        frame.src = 'usuarios.html';
        break;
      case 'Roles':
        frame.src = 'roles.html';
        break;
      case 'Clientes':
        frame.src = 'clientes.html';
        break;
      case 'Repuestos':
      frame.src = 'repuestos.html';
      break;
      default:
        frame.src = 'dashboard.html';
    }
  }