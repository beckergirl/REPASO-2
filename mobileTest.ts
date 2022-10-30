import { Mobile } from "./mobile"

let nokia: Mobile = new Mobile ("nokia 3310", "Nokia", "negro","vintage 3310",90);
console.log(nokia);

let iphone: Mobile = new Mobile ("iphone 14Pro", "apple", "plateado","14 pro", 1.469);
console.log(iphone);

let samsung: Mobile = new Mobile ("samsung Galaxy", "samsung", "blanco","galaxy Zlip4",1099);
console.log(samsung);


export let myMobiles = [nokia, iphone, samsung];
console.log(myMobiles);

nokia.showCharacteristics();
iphone.showCharacteristics();





