function enviarSaludo() {
    let $saludo = document.getElementById("saludo");
    let $nombre = document.getElementById("nombre").value;
    let $apellido = document.getElementById("apellido").value;
    
    if ($nombre === "" || $apellido === "") {
      $saludo.classList.remove("confirmar");
      $saludo.classList.add("alerta");
      $saludo.innerHTML = "Porfavor, Ingresar ambos datos";
    } else {
      $saludo.classList.remove("alerta");
      $saludo.classList.add("confirmar");
      $saludo.innerHTML = `Hola ${$nombre} ${$apellido}, gracias por rellenar el formulario de LarnU.`;
    }
  }
  