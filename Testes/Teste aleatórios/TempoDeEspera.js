const printName = (name) => {
    setTimeout(() => {
        console.log(name);
    }, 5000);
};

const printAge = (age) => {
    console.log(`${age} years`);
};

printName('Wender');
printName(19)