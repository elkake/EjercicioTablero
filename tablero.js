
// numero de cuadroxcuadro
const entero = 4
// funcion que genera el tablero
function tablero(numeroCuadros) {
  // contenedor de tablero
  let fila = ''

  //   doble bucle para crear matriz
  for (let i = 1; i <= numeroCuadros - 1; i++) {
    for (let j = numeroCuadros; j >= 1; j--) {
      // j= 4, si es menor o igual que 1 > 'B'
      if (j <= i) {
        fila += 'B '
      } else {
        fila += 'R '
      }
    }
    // Salto de linea
    fila += '\n'
  }

  //   llenar la ultima fila del tablero
  for (let k = 1; k <= numeroCuadros; k++) {
    fila += 'X '
  }
  // mostrar fila
  console.log(fila)
}

// ejecucion de la funcion
tablero(entero)
