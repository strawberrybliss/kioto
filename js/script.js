// ventana modal

function openModal() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("email").value;
  var mensaje = document.getElementById("comment").value;

  console.log("Nombre:", nombre);
  console.log("Correo:", correo);
  console.log("Mensaje", mensaje);

  document.getElementById("n").innerHTML = nombre
  document.getElementById("c").innerHTML = correo
  document.getElementById("m").innerHTML = mensaje

  document.getElementById("modal").style.display = "flex";

  return false;
}

// cerrar ventana modal

function closeModal() {
  document.getElementById("modal").style.display = "none";

  return false;
}