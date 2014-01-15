var arreglo = process.argv;
var suma = 0;

for (var i = 2; i < arreglo.length; i++) {
  suma = suma + Number(arreglo[i]);
}

console.log(suma);