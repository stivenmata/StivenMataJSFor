// let numero = parseInt(prompt("ingrese un numero"))

// console.log("Tabla de multiplicar del " + numero + ":");

// for (let i = 1; i <= 10; i++) {
//     console.log( numero + " x " + i + " = " + numero * i );
// } 
 
// let suma = 0;
// let numero;

// do {
//     numero = parseFloat(prompt("Introduce un número (0 para terminar):"));
//     if (numero !== 0) {
//         suma += numero;
//     }
// } while (numero !== 0);

// console.log(" La suma total es: " + suma);

// let adivinanza = 77;
// let intentos = []; 

// while (true) {
//     let numeroIngresado = parseFloat(prompt("Ingrese un número del 1 al 100"));

   
//     if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
//         alert("Por favor, ingresa un número válido entre 1 y 100.");
//         continue; 
//     }


//     intentos.push(numeroIngresado);

//     if (numeroIngresado === adivinanza) {
//         alert(" ¡Felicidades! Has ganado en " + intentos.length + intentos + ".");
//         break; 
//     } else {
//         if (numeroIngresado > adivinanza) {
//             alert("Tu número es mayor.");
//         } else {
//             alert("Tu número es menor.");
//         }
//     }
// }

// let inicio = 0 
// let usuario = parseInt(prompt("Ingrese un numero"))

// for (let index = 0; index <= usuario; index++) {
//  if (usuario % index == 0) {
//     inicio = inicio + 1;
//  }
    
// }
// if (inicio === 2) {
//     alert("NO es un numero primo")
// }else{
//     alert("Si es un numero primo")
// }

// let numero = parseInt(prompt("Ingrese un numero"))

// let divisores = [];

// for (let index = 1; index <= numero; index++) {
//  if (numero % index == 0) {
//     divisores.push(index)

//  }
// }
//  alert(" Los divisores de " + numero + " son: " + divisores.join(', '));

// let array = ["mesa", "taza", "muebles", "gabinete", "bolsas", "nevera", "lapiz", "cama", "televisor", "telefono"]

// for (let index = 0; index < array.length; index++) {

//     console.log(array[index]);
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let index = 0; index < array.length; index++) {
// let doble = array[index] * 2;
//     console.log(" el doble " + array[index] + " es: " + doble);
// }


// let grupoFamiliar = [
//     { nombre: "Elio", edad: 40, parentesco: "Padre", ocupacion: "Taxista" },
//     { nombre: "Yolismar", edad: 38, parentesco: "Madre", ocupacion: "Abogada"},
//     { nombre: "Estiven", edad: 22, parentesco: "Hijo", ocupacion:  "Universitario"},
//     { nombre: "Ana", edad: 17, parentesco: "Hija", ocupacion: "Estudiante" },
//     { nombre: "Stiven", edad: 79, parentesco: "Abuelo", ocupacion: "Jubilado" }
//   ];
  

//   for (let i = 0; i < grupoFamiliar.length; i++) {
//     let persona = grupoFamiliar[i];
//     console.log(" Hola, mi nombre es " + persona.nombre + " , " + " tengo " + persona.edad + " años " + " , "  + " soy " + persona.parentesco + " y trabajo como " +  persona.ocupacion + " . ");
//   } 

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let i = 0; i < numeros.length; i++) {
 
//   if (numeros[i] % 2 !== 0) {
//     console.log(numeros[i]);
//   }
// }

// let sumaPares = 0;
// let sumaImpares = 0;
// let numero;

// do {
//   numero = parseInt(prompt("Ingrese un número (0 para terminar):"));
  
//   if (numero !== 0) {
//     if (numero % 2 === 0) {
//       sumaPares += numero;
//     } else {
//       sumaImpares += numero;
//     }
//   }
// } while (numero !== 0);

// console.log("La suma de los números pares es: " + sumaPares);
// console.log("La suma de los números impares es: " + sumaImpares);

// let numeros = [3, 56, 12, 78, 34, 23, 100, 11, 6, 17];


// let maxNumero = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > maxNumero) {
//     maxNumero = numeros[i];
//   }
// }
// alert("El número más grande es: " + maxNumero);


// let numeros = [3, 56, 12, 78, 34, 23, 100, 11, 6, 17];
// let minNumero = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] < minNumero) {
//     minNumero = numeros[i];
//   }
// }
// alert("El número más chico es: " + minNumero);

// let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
// let jugador2 = prompt("Ingrese el nombre del Jugador 2:");

// let opciones = ["piedra", "papel", "tijeras"];
// let eleccion1, eleccion2;
// let empate = true;

// for (; empate; ) {
  
//   eleccion1 = prompt(jugador1 + "," + " elija piedra" + ", " + " papel" + " o tijeras:").toLowerCase();
//   eleccion2 = prompt(jugador2 + "," + " elija piedra" + ", " + " papel" + " o tijeras:").toLowerCase();

  
//   if (!opciones.includes(eleccion1) || !opciones.includes(eleccion2)) {
//     console.log("Ambos jugadores deben elegir entre 'piedra', 'papel' o 'tijeras'. Inténtelo de nuevo.");
//     continue;
//   }

 
//   if (eleccion1 === eleccion2) {
//     console.log("Empate, jueguen otra vez.");
//   } else if (
//     (eleccion1 === "piedra" && eleccion2 === "tijeras") ||
//     (eleccion1 === "papel" && eleccion2 === "piedra") ||
//     (eleccion1 === "tijeras" && eleccion2 === "papel")
//   ) {
//     console.log( "¡" + jugador1 + " Felicidades has Ganado :)! "  );
//     empate = false;
//   } else {
//     console.log( "¡" + jugador2 + " Felicidades has Ganado :)! "  );
//     empate = false;
//   }
// }

// let numFilas = 5;


// for (let i = 1; i <= numFilas; i++) {
//   let linea = "";
  
  
//   for (let j = 1; j <= i; j++) {
//     linea += " * ";
//   }
  
 
//   console.log(linea);
// }

// let numFilas = 5;


// for (let i = numFilas; i > 0; i--) {
//   let linea = "";
  
  
//   for (let j = 0; j < i; j++) {
//     linea += " * ";
//   }
  

//   console.log(linea);
// }


// let numeros = [34, 7, 23, 32, 5, 62, 17, 42, 29, 11];


// let n = numeros.length;


// for (let i = 0; i < n - 1; i++) {

//   for (let j = 0; j < n - 1 - i; j++) {
   
//     if (numeros[j] > numeros[j + 1]) {
      
//       let temp = numeros[j];
//       numeros[j] = numeros[j + 1];
//       numeros[j + 1] = temp;
//     }
//   }
// }
// console.log("Array ordenado:", numeros);








