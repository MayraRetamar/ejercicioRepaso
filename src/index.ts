/*Ejercicio 1:  
Una materia de la carrera de Ingeniería de Sistemas exige la entrega de 
un trabajo práctico cada mes del año académico. 
Este arreglo contiene las notas de un alumno 
para los meses de marzo a diciembre:  
notasAlumno: [7, 6, 9, 5, 8, 7, 10, 4, 8, 8]  
1) Teniendo en cuenta que se aprueba con 6, crear una función que 
devuelva en que meses desaprobó el alumno.  
2) Crear una función que devuelva en que mes obtuvo menor nota 
el alumno y cuál fue la nota.  
3) Crear una función que devuelva en que mes obtuvo mayor nota 
el alumno y cuál fue la nota.  
4) Crear una función que devuelva el promedio del alumno.*/

let notas: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];
let meses: string[] = [
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

function mesesDesaprobados(notas: number[], meses: string[]): string {
  let mesDesaprobado: string = " ";
  let indice: number;
  for (indice = 0; indice < notas.length; indice++) {
    if (notas[indice] < 6) {
      mesDesaprobado += meses[indice] + ",";
    }
  }
  return mesDesaprobado;
}

console.log("Los meses desaprobados son " + mesesDesaprobados(notas, meses));

function devolverNotaMinima(notas: number[], meses: string[]) {
  let notaMinima: number = 11;
  let mesMinimo: string = " ";
  let indice: number;
  for (indice = 0; indice < 10; indice++) {
    if (notas[indice] < notaMinima) {
      notaMinima = notas[indice];
      mesMinimo = meses[indice];
    }
  }
  return notaMinima + mesMinimo;
}

console.log(
  "el mes y la menor nota fueron " + devolverNotaMinima(notas, meses)
);

function devolverNotaMaxima(notas: number[], meses: string[]) {
  let notaMaxima: number = -1;
  let mesMaximo: string = " ";
  let indice: number;
  for (indice = 0; indice < 10; indice++) {
    if (notas[indice] > notaMaxima) {
      notaMaxima = notas[indice];
      mesMaximo = meses[indice];
    }
  }
  return notaMaxima + mesMaximo;
}

console.log(
  "el mes y la menor nota fueron " + devolverNotaMaxima(notas, meses)
);

function devolverPromedio(arreglo: number[], cantidad: number) {
  let suma: number = 0;
  let indice: number;
  let promedio: number;
  for (indice = 0; indice < cantidad; indice++) {
    suma += arreglo[indice];
  }
  promedio = suma / cantidad;
  return promedio;
}

console.log("El promedio es " + devolverPromedio(notas, 10));
