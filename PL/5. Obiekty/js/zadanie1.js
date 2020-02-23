// zadanie 1

const people = {
    wiek: 15,
    imie: 'Michal',
};


// zadanie 2
let myClass = {
    title: 'JavaScript jest świetny',
    room: {
        number: 112,
        numberOfSits: 30,
        owner: {
            name: 'Maciej Wij',
            teachFrom: 'Chemist'
        }
    }
}

// console.log(myClass.title);
// console.log(myClass.room.numberOfSits);
// console.log(myClass.room.owner.teachFrom);

//zadanie 3
let myGroup = {
    menthor: 'Wojtek',
    members: [
        {
            name: 'Janek',
            age: 22
        },
        {
            name: 'Asia',
            age: 12
        },
        {
            name: 'Marek',
            age: 33
        },
        {
            name: 'Andrzej',
            age: 44
        },
        {
            name: 'Jaś',
            age: 24
        },
        {
            name: 'Wokay JSON',
            age: 19
        }
    ]
}

// console.log(myGroup.menthor);
// console.log(myGroup.members.length);

let countAge = 0;

for (let i = 0; i <= myGroup.members.length - 1; i++) {
    countAge += myGroup.members[i].age;
}
// console.log(countAge);
// console.log(countAge/myGroup.members.length);

let classAvaiable = [
    {
        name: 'A',
        number: 1,
        slots: 5,
        minAge: 10
    },
    {
        name: 'B',
        number: 2,
        slots: 10,
        minAge: 15
    },
    {
        name: 'C',
        number: 3,
        slots: 10,
        minAge: 0
    },
    {
        name: 'D',
        number: 4,
        slots: 15,
        minAge: 30
    },
    {
        name: 'E',
        number: 5,
        slots: 2,
        minAge: 5
    },
    {
        name: 'F',
        number: 6,
        slots: 12,
        minAge: 10
    },
    {
        name: 'G',
        number: 7,
        slots: 3,
        minAge: 40
    },
    {
        name: 'H',
        number: 8,
        slots: 30,
        minAge: 20
    }
];

// const currentClassMinSlots = [];
//
// for (let k = 0; k <= classAvaiable.length - 1; k++) {
//     let slots = classAvaiable[k].slots;
//     // console.log(slots);
//
//     if ( slots >= myGroup.members.length )
//         currentClassMinSlots.push(classAvaiable[k].name);
// }
//
// console.log(`Klasy ktore spełniaja ilosc miejsc ${currentClassMinSlots}`);
//
//
// const currentClassMinAge = [];
//
// for (let k = 0; k <= currentClassMinSlots.length - 1; k++) {
//     let minAge = currentClassMinSlots[k].minAge;
//     console.log(minAge);
//
//     if ( minAge <= myGroup.members.length )
//         currentClassMinAge.push(currentClassMinSlots[k].name);
// }
//
//
// console.log(currentClassMinAge);
// console.log(`Klasy ktore spełniaja krytetrium wieku ${currentClassMinAge}`);




let minage;
minage = myGroup.members[0].age
for(let i = 0; i< myGroup.members.length; i++){
    const age = myGroup.members[i].age;
    if(age < minage)
        minage = age;
}

classAvaiable.filter(function(mojaklasa){
    return mojaklasa.slots >= quantity && mojaklasa.minAge <= minage;
});


Math.min(...[1,5,8,2,9]); // ta funkcja dzila tylko z "..."

