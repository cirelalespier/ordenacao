var numeros = [3, 1, 2, 5];
var i = 0;
var aux;

while(i<numeros.length)
{
if (numeros[i]>numeros[i+1])
{
    aux = numeros[i];
    numeros[i] = numeros[i+1];
    numeros[i+1] = aux;
}
i++;
}

console.log(numeros)
