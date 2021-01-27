/* Calculator version 1 */

function basicCalculator (num1, num2) {
    if (num1 > 0 && num2 > 0 && num1 > num2) {
        return (
            console.log(
                'num1 = ' + num1 + ', num2 = ' + num2 + '\n' +
                'Wynik dodawania wynosi ' + (num1 + num2) + '\n' +
                'Wynik odejmowania wynosi ' + (num1 - num2) + '\n' +
                'Wynik mnozenia wynosi ' + (num1 * num2)
            )
        );
    } else {
        return console.log('Wynik jest nieprawidlowy');
    }
}

basicCalculator(5,3);

/* Calculator version 2 */

function myCalculator (number1, number2) {
    let addResult = number1 + number2;
    let subtractResult = number1 - number2;
    let multiplyResult = number1 * number2;

    if (addResult >= 0 && subtractResult >= 0 && multiplyResult >= 0) {
        return (
            console.log(
                'number1 = ' + number1 + ', number2 = ' + number2 + '\n' +
                'Wynik dodawania wynosi ' + addResult + '\n' +
                'Wynik odejmowania wynosi ' + subtractResult + '\n' +
                'Wynik mnozenia wynosi ' + multiplyResult
            )
        )
    } else {
        return console.log('Wynikiem jest liczba ujemna');
    }
}

myCalculator(5,1);