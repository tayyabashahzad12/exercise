const alertFunction = () => {
    const number = prompt("Enter any number to generate its multiplication table");

    if (number) {
        document.write(`Multiplication table for ${number}:<br>`);
        document.write(`${number} x 1 = ${number * 1}<br>`);
        document.write(`${number} x 2 = ${number * 2}<br>`);
        document.write(`${number} x 3 = ${number * 3}<br>`);
        document.write(`${number} x 4 = ${number * 4}<br>`);
        document.write(`${number} x 5 = ${number * 5}<br>`);
        document.write(`${number} x 6 = ${number * 6}<br>`);
        document.write(`${number} x 7 = ${number * 7}<br>`);
        document.write(`${number} x 8 = ${number * 8}<br>`);
        document.write(`${number} x 9 = ${number * 9}<br>`);
        document.write(`${number} x 10 = ${number * 10}<br>`);
    } else {
        document.write("You did not enter a number.");
    }
}
