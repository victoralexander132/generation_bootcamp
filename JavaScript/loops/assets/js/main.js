/* Ciclos */
// for
// for in
// .forEach()

// imprimir la frase "hola mundo" 10 vecese

// for (let i = 1; i <= 10; i++) {
//   console.log("Adiós mundo!", i);
// }
// // iteración: un paso del ciclo

// /* while */
// let control = 0; 
// while (control <= 10) {
//   console.log("Hola desde un ciclo while", control);
//   control++;
// }


// do while
let i = 1;
do {
  console.log("Hola desde un do while");
  i++;
} while (i <= 5);






/* Ejercicio aparte */
let arr = [1,2,4,8,16,32];

arr.forEach((value,i)=>arr[i] = value*2)
console.log(arr);
/* Ejercicio aparte */


// const pordos = (arr) => {
//   let res = [];
//   for (let iterator of arr) {
//     iterator /= 2;
//     res.push(iterator)
//   }
//   return res;
// }

// console.log(pordos(arr));

