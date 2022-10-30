"use strict";
// RETOS DE INVOCACIÓN
/*
Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
par o impar la suma de los caracteres de cada uno de los siguientes arrays:
• [“Casa”, “Coche”, “Ciudad”, “Cesta”]
• [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
• [“Venezuela”, “Veneno”, “Voltaje”] */
exports.__esModule = true;
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var arrayC = ["Casa", "Coche", "Ciudad", "Cesta"];
(0, condicionales_1.isEven)((0, buclesFor_1.add)(arrayC));
console.log(arrayC.length);
var arrayB = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
(0, condicionales_1.isEven)((0, buclesFor_1.add)(arrayB));
console.log(arrayB.length);
var arrayV = ["Venezuela", "Veneno", "Voltaje"];
(0, condicionales_1.isEven)((0, buclesFor_1.add)(arrayV));
console.log(arrayV.length);
