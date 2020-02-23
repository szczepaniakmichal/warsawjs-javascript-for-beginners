const age = prompt("podaj swoj wiek");
const gender = prompt('podaj plec');

console.log(age);
console.log(gender);

if (age < 15) {
    console.log("Za osoby poniżej 15 roku życia odpowiadają rodzicę.");
} else if ((age > 15) && (age < 18)) {
    console.log('Osoby w wieku 15-18 lat mają ograniczoną odpowiedzialność karną.');
} else if ((age > 18) && (age < 150)) {
    console.log('Osoby powyżej 18 lat mają pełną odpowiedzialność.');
} else if (age > 150) {
    console.log('Dodatkowo osoby powyżej 150 lat są ścigane przez wszystkich naukowców, bo odkryły nieskończone źródło wiecznej młodości')
} else {
    console.log('Jesteś poza poprawnymi warotsciami')
}

if ( gender === 'woman' ) {
    console.log(`Na emeryture przejdziesz za ${ 65 - age} lat`)
} else if (gender === 'man') {
    console.log(`Na emeryture przejdziesz za ${ 67 - age} lat`)
}


const numbers = [];

for (let i = 0; i < 3; i++) {
    numbers.push(prompt("number"));
}

numbers.sort(function (a, b) {
    return b - a
});

console.log(numbers);

console.log(numbers[0]);
