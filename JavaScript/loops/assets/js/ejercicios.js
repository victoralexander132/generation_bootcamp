
const arbol = () => {
  const num = parseInt(prompt('¿Cuántas líneas quieres?'));
  if (isNaN(num)) {
    console.error('Ingresa un número válido')
  }
  for (let i = 0; i < num; i++) {
    let str = '*'
      for (let j = 0; j < i; j++) {
        str += '*';
      }
    console.log(str)
    document.write(str)
    document.write('<br>')
  }
}

// arbol()


// Ejercicio 1

// Escribe un loop que haga lo siguiente:

// Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
// El ciclo se mantendrá mientras que el valor de xValue sea positivo.

const ejercicio1 = (xValue) => {
  if (xValue < 0) {
    return console.log('Ingresa un número positivo')
  } else {
    while (xValue > 0) {
      xValue  -= 0.5;
      console.log(xValue);
    }
  }
}

// ejercicio1(4)


// Ejercicio 2
//Imprime todos los números impares entre 1 y 100

const ejercicio2 = () => {
  for (let i = 1; i <= 100; i++) {
    if (i%2 === 1) {
      console.log(i);
    }
  }
}

// ejercicio2()

// Ejercicio 3
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]

const ejercicio3 = (n) => {
  let i = 1;
  let str = [];
  while (i <= n) {
    str += `[${i}] `
    i++;
  }
  console.log(str);
}
 
// ejercicio3(10)

// Ejercicio 4
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 +5 )

const ejercicio4 = (n) => {
  let res = 0;
  for (let i = 1; i <= n; i++) {
        res += i;
  }
  console.log(res);
}

// ejercicio4(100)

const sam = () => {
  let numIn = new Number(prompt("Ingrese un número"));
  const res = [];
  let total = 0;
  for (numIn ; numIn>0 ; numIn--) {
      res.push(numIn)
      total += numIn;
    }
    document.write(res.length + "<hr>")
    document.write(total + " = " + res.join(' + ') +"<hr>")
    // document.write(total + "<hr>")
}

// sam()