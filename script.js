console.log('Hello, world !' + '\n' + 'Bienvenue dans le monde de la programmation');

let nombre1 = 5;
let nombre2 = 10;

console.log(nombre1 + nombre2);

let tabFruits = ['kiwi', 'fraise', 'mure'];
for (let fruit = 0; fruit < tabFruits.length; fruit = fruit + 1) {
    console.log(tabFruits[fruit]);
}

for (let a = 1; a < 21; a = a + 1) {
    if (a % 2 === 0) {
        console.log(a);

    }
}

const mot = 'abracadrabra';
const voyelle = ['a', 'e', 'i', 'o', 'u'];
let nombreVoyelles = 0;

for (let i = 0; i < voyelle.length; i = i + 1) {
    for (let chaine = 0; chaine < mot.length; chaine = chaine + 1) {
        if (voyelle[i] === mot[chaine]) {
            nombreVoyelles = nombreVoyelles + 1;
        }
    }
}

console.log('Le nombre de voyelles est :' + nombreVoyelles)


