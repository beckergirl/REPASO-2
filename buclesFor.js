"use strict";
// RETOS DE BUCLES FOR // REPASO 2
exports.__esModule = true;
exports.add = void 0;
/* 2. Realizar una función que IMPRIMA los números impares existentes hasta el número
indicado como parámetro de entrada.

La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num) */
function evenNumbers(num) {
    var impares = [];
    for (var i = 0; i < num; i++) {
        if ((i % 2) == 1) {
            impares.push(i);
        }
    }
    console.log(impares);
}
evenNumbers(35); // imprime  1,  3,  5,  7,  9, 11, 13 etc...
/* 3. Realizar una función que como parámetro de entrada reciba un array y como salida
DEVUELVA el array revertido. No se puede utilizar el método revert de la clase array
La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr) */
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayRevertido = [];
function myRevert(myArray) {
    /* let arrayRevertido: any[] = []; */
    for (var i = myArray.length - 1; i > 0; i--) { /// [ undefined, 10, 9, 8, 7, 6, 5, 4, 3, 2 ] porqué undefined???(+1 ó -1?) +1 = undefind undefind
        arrayRevertido.push(myArray[i]); /// mirar (join, split, reverse)
    }
    return arrayRevertido;
}
console.log(myRevert(myArray));
myRevert(arrayRevertido); /// [ undefined, 10, 9, 8, 7, 6, 5, 4, 3, 2 ] arreglado con -1!!!
/* 4. Realizar una función que reciba como parámetro un array de strings que contenga nombres de colores y
te IMPRIMA en cada caso si el color está en el arcoíris o no. La cabecera de la función tendrá el
siguiente aspecto: function isRainbow(colors). */
var arcoiris = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
var colores = [];
function isRainbow(colores) {
    for (var i = 0; i < colores.length; i++) {
        if (arcoiris.includes(colores[i])) {
            console.log("El color " + colores[i] + ", aparece en el arcoiris");
        }
        else {
            console.log("El color " + colores[i] + ", no aparece en el arcoiris");
        }
    }
}
isRainbow(["blanco"]); /// imprime el color blanco no está en el arcoiris.
/* 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un
array. La cabecera de la función tendrá el siguiente aspecto: function add(myWords) */
var myWorlds = ["Supercalifragilisticoexpialidoso", "hola"];
function add(myWorlds) {
    var suma = 0;
    for (var i = 0; i < myWorlds.length; i++) {
        suma = suma + myWorlds[i].length;
    }
    return suma;
}
exports.add = add;
console.log(add(myWorlds)); /// imprime 36!
