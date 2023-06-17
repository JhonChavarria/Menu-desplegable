var miElemento = document.getElementById("IconoEstado");
miElemento.addEventListener("click", function() {
  if (this.style.color === "green") {
    this.style.color = "red";
  } else {
    this.style.color = "green";
  }
});


