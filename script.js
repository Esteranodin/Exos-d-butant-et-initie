// EXO 1
// console.log('Hello, world !' + '\n' + 'Bienvenue dans le monde de la programmation');


// EXO 2
// const nombre1 = 5;
// const nombre2 = 10;
// console.log(nombre1 + nombre2);


// EXO 3 ==> possible avec forEach / voir correction Jeremy
// let tabFruits = ['kiwi', 'fraise', 'mure'];
// for (let fruit = 0; fruit < tabFruits.length; fruit = fruit + 1) {
//     console.log(tabFruits[fruit]); }


// EXO 4
// for (let a = 1; a < 21; a = a + 1) {
//     if (a % 2 === 0) {
//         console.log(a); }
// }


// EXO 5 boucle dans la boucle // voir avec une focntion sur correction Jeremy
// const mot = 'bidouille';
// const voyelle = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
// let nombreVoyelles = 0;

// for (let i = 0; i < voyelle.length; i = i + 1) {
//     for (let chaine = 0; chaine < mot.length; chaine = chaine + 1) {
//         if (voyelle[i] === mot[chaine]) {
//             nombreVoyelles = nombreVoyelles + 1;
//         }
//     }
// }
// console.log('Le nombre de voyelles est :' + nombreVoyelles)


// EXO 5 avec une regEx
// const mot = 'bidouille';
// const voyelle = /[aeiouy]/g;
// const voyellesFound = (mot.match(voyelle));
// console.log(voyellesFound.length);

// EXO 6 PAS FINI / VOIR CORRECTION JEREMY avec prog. orientee objet
// const phrase = 'les poules ont des dents';
// const caract = /\w/g;
// const lettresFound = phrase.match(caract);
// const occurence = /\w/;
// console.log(lettresFound.search(occurence));

//EXO 6 Correction
// function countletters(sentence) {
//     const letterCounts = {};
//     for(let letter of sentence) {
//         if(letter.match(/[a-z]/ig)){
//             letter = letter.tol.owerCase();
//             if (letterCounts[letter]){
//                 letterCounts[letter] += 1;
//             } else {
//                 letterCounts[letter] = 1;
//             }
//         }
//     }
//     return letterCounts;
// }
// const randomSentence = 'miam le gfdskgd'
// console.log (countletters(randomSentence));

// EXO 7
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

// EXO 8
// const liste5nombres = [56, 87, 78728, 272128, 99];
// let lePlusGrandNombre = list5nombres[0];
// for (let i = 1; i < liste5nombres.length; i += 1) {
//     if (liste5nombres[i] >= lePlusGrandNombre) {
//         lePlusGrandNombre = liste5nombres[i];
//     }
// };
// console.log(lePlusGrandNombre)

// EXO 9
// let unmot = 'rognon';
// let aEnvers = '';
// for (let i = unmot.length - 1; i >= 0; i -= 1) {
//     aEnvers = aEnvers + unmot[i];
// };
// console.log(aEnvers);
