fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').then(res => res.json()).then(res => {
//pokaż mi swój rezultat i pisz co tutaj się dzieje
//     console.log(res[0].rates[1]);
    const allCurrency = res[0].rates;

    // console.log(allCurrency);

    const courses = document.querySelector("#courses");

    allCurrency.forEach((el) => {
        const tableTr = document.createElement('tr');
        const alias = document.createElement('td');
        const fullName = document.createElement('td');
        const exchangeRate = document.createElement('td');

        alias.textContent = el.currency;
        tableTr.appendChild(alias);

        fullName.textContent = el.code;
        tableTr.appendChild(fullName);

        exchangeRate.textContent = el.mid.toFixed(2);
        tableTr.appendChild(exchangeRate);

        courses.appendChild(tableTr);
    });
});

