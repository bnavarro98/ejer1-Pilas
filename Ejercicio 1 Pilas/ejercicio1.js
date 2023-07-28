var pila = ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melón"]

function obtenerElementos(pila, numero) {
    var elementos = [];
    
    for (var i = 0; i < numero; i++) {
      if (pila.length > 0) {
        elementos.push(pila[i]);
      } else {
        break;
      }
    }
    
    return elementos;
  }

  var resultado = obtenerElementos(pila, 4);
  console.log(resultado); 