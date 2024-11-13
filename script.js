// Exo 1
// console.log('Hello, world !' + '\n' + 'Bienvenue dans le monde de la programmation');


// Exo 2
// let nombre1 = 5;
// let nombre2 = 10;
// console.log(nombre1 + nombre2);


// Exo 3
// let tabFruits = ['kiwi', 'fraise', 'mure'];
// for (let fruit = 0; fruit < tabFruits.length; fruit = fruit + 1) {
//     console.log(tabFruits[fruit]); }


// Exo 4
// for (let a = 1; a < 21; a = a + 1) {
//     if (a % 2 === 0) {
//         console.log(a); }
// }


//Exo 5 boucle dans la boucle
// const mot = 'bidouille';
// const voyelle = ['a', 'e', 'i', 'o', 'u'];
// let nombreVoyelles = 0;

// for (let i = 0; i < voyelle.length; i = i + 1) {
//     for (let chaine = 0; chaine < mot.length; chaine = chaine + 1) {
//         if (voyelle[i] === mot[chaine]) {
//             nombreVoyelles = nombreVoyelles + 1;
//         }
//     }
// }
// console.log('Le nombre de voyelles est :' + nombreVoyelles)


// Exo 5 sans boucle dans la boucle
// const mot = 'bidouille';
// const voyelle = /[aeiou]/g;
// const voyellesFound = (mot.match(voyelle));
// console.log(voyellesFound.length);

//Exo 6 PAS FINI
// const phrase = 'les poules ont des dents';
// const caract = /\w/g;
// const lettresFound = phrase.match(caract);
// const occurence = /\w/;
// console.log(lettresFound.search(occurence));

//Exo 7
// const tabChiffres = [17, 32, 29, -25, -91];
// let nombresPositifs = [];
// let nombresNegatifs = [];
// for (let i = 0; i < tabChiffres.length; i = i + 1) {
//     if (tabChiffres[i] < 0) {
//         nombresNegatifs.push(tabChiffres[i])
//     }
//     else {
//         nombresPositifs.push(tabChiffres[i]);
//     }
// };
// console.log(nombresNegatifs);
// console.log(nombresPositifs);

//EXO 8
let liste5nombres = [56, 87, 78728, 278, 99];
for (let i = 0; i<liste5nombres.length; i = i+1){
if (liste5nombres[i].length)
};

console.log(liste5nombres.length)