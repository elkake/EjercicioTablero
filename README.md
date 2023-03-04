# EJERCICIO TABLERO

El ejercicio consistia de 4 puntos importantes.

- El niño quiere pintar todas las casillas.
- La misma cantidad de rojas y de azules.
- No deben quedar 2 columnas con la misma cantidad de casillas rojas.
- No deben quedar 2 filas con la misma cantidad de casillas rojas.

Pero un par de ellos hacian que sea imposible completarlo a menos que quede una fila inutilizada.
Puesto que, se podian repetir como se muestra en la siguiente imagen.

<img width='300px' src='https://i.imgur.com/QYeDMpC.png'>

## SOLUCION

Decidi resolver el problema sin tomar en cuenta la primera regla de pintar todo el tablero.
 
<img width='300px' src='https://i.imgur.com/hGtvd1M.png'>

### CONSOLA 8x8

```
  R R R R R R R B
  R R R R R R B B
  R R R R R B B B
  R R R R B B B B
  R R R B B B B B
  R R B B B B B B
  R B B B B B B B
  X X X X X X X X
```

## EJECUCION

Puede cambiar el tamaño del tablero, cambiando la constante **entero** manualmente

```
  node tablero.js 
```
