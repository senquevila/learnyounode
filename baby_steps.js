var arreglo = process.argv;
var suma = 0;

for (var i = 2; i < arreglo.length; i++) {
  suma = suma + Number(arreglo[i]);
}

console.log(suma);

/******************
var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)
********************/