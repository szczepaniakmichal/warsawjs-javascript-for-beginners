//Zadanie 1
for ( let i = 0; i <= 10; i++ ) {
    console.log(i)
}


//Zadanie 2
for ( let i = 0; i <= 10; i += 2 ) {
    console.log(i)
}

//Zadanie 3
let array=["pętle","są","super","fajne"];

array.forEach(el => {
    console.log(el);
});


// Zadanie 4
const userNumber = prompt('prowadz liczbe');
const arrayNumbers = [];
const divider = [];

for (let i = 0; i <= userNumber; i++) {
    arrayNumbers.push(i);
}

console.log(arrayNumbers);


// Zadanie 5
for (let i = 0; i <= userNumber; i++) {
    if ( userNumber % i === 0 ) {
        divider.push(i);
    }
}

console.log(divider);


