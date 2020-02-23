const title = document.querySelector("#mojnaglowek");
title.textContent = 'Javascript jest super';

const input = document.querySelector("#coTutajJestNapisane");
console.log(input);

input.value = ' to nowa tresc';

title.textContent = input.value;

const newEl = document.createElement("p");

newEl.textContent = 'createElement';


const body = document.querySelector('body');
body.appendChild(newEl);

let comment = {
    author: "Andrzej Molek",
    date: "20.03.2019",
    msg: "Ale super ten warsztat robimy już czary mary"
}


const idComments = document.querySelector("#comments");
const author = document.createElement("h2");
author.textContent = comment.author;

idComments.appendChild(author);
console.log(idComments);

const spanDate = document.createElement('span');
spanDate.textContent = comment.date;
idComments.appendChild(spanDate);

const paragrafMsg = document.createElement("p");
paragrafMsg.textContent = comment.msg;
idComments.appendChild(paragrafMsg);


let comments = [
    {
        author: "Wojtek Trek",
        date: "20.03.2019",
        msg: "Już taki jestem..."
    },
    {
        author: "Strach na wróble",
        date: "21.03.2019",
        msg: "Zimny drań"
    },
    {
        author: "Wokay",
        date: "24.03.2019",
        msg: "I dobrze mi z tym"
    },
    {
        author: "Zenek Martyniuk",
        date: "26.03.2019",
        msg: "Miłość miłość w zakopanym"
    },
    {
        author: "Sławomir",
        date: "30.03.2019",
        msg: "Ej Zenek, ukradłeś mi tekst..."
    }
]

comments.forEach(el => {

    const {author, date, msg} = el;

    const h2 = document.createElement("h2");
    h2.textContent = author;
    idComments.appendChild(h2);

    const spanDate = document.createElement('span');
    spanDate.textContent = date;
    idComments.appendChild(spanDate);

    const paragrafMsg = document.createElement("p");
    paragrafMsg.textContent = msg;
    idComments.appendChild(paragrafMsg);
});





