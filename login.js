const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //EXPRESIONES REGULARES PARA VALIDAR EL EMAIL:
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var letters = /^[A-Za-z]+$/;

  if (email.value == "" || pass.value == "") {
    // alert("LLenar los campos")
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Llenar los campos",
    });
  } else if (!regexEmail.test(email.value)) {
    alert("El email no es válido");
  } else if (!letters.test(pass.value)) {
    alert("La contraseña no es válida");
  } else {
    window.location = "index.html";
  }
});
