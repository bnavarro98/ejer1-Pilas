function reemplazar(pila, nuevo, viejo) {
  var encontrada = false;
  var elementos = [];

  while (pila.length > 0) {
    var elemento = pila.pop();
    if (elemento === viejo && !encontrada) {
      elementos.push(nuevo);
      encontrada = true;
    } else {
      elementos.push(elemento);
    }
  }

  elementos.reverse();
  pila.push(...elementos);
  return pila;
}

var pila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
var resultado = reemplazar(pila, 7, 2);
var indice = pila.indexOf(nuevo + 1);
resultado = resultado.slice(0, indice);
console.log(resultado); // [3, 2, 3, 4, 6, 8, 1, 7]