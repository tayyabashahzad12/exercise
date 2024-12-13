const alertFunction = () => {
    const number = prompt("Enter any number to generate its multiplication table");

if (number) {
    document.write(`Multiplication table for ${number}:<br>`);
    let counter = 1;
    while (counter <= 10) {
        document.write(` ${number} x ${counter} = ${number * counter}<br>`);
        counter++;
    }
}

if (!number) {
    document.write("You did not enter a number.");
}
}
