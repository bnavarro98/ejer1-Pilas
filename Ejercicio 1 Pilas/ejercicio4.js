//Pila de contenedores
var pilaContenedores = [1,2,3,4,5];
var pilaTemporal = [];

//Función para retirar un contenedor de la pila
function retirarContenedor(identificacion) {
  var contenedorEncontrado = false;

  while (pilaContenedores.length > 0) {
    var contenedorActual = pilaContenedores.pop();

    if (contenedorActual === identificacion) {
      contenedorEncontrado = true;
      console.log("Retirando contenedor:", identificacion, "de la pila.");
      console.log("En la pila temporal ponemos los contenedores:", pilaTemporal);
      break;
    } else {
      pilaTemporal.push(contenedorActual);
    }
  }

  while (pilaTemporal.length > 0) {
    pilaContenedores.push(pilaTemporal.pop());
  }

  if (!contenedorEncontrado) {
    console.log("No se encontró el contenedor", identificacion, "en la pila.");
  }
}

console.log("Pila original:", pilaContenedores);
retirarContenedor(2);
//retirarContenedor(3);
console.log("Pila sin el contenedor seleccionado:", pilaContenedores);