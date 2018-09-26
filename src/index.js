module.exports = function solveEquation(equation) {
    let array = equation.split(' ');
    let abc = [];
    let result = [];


    for (let i = 0; i < array.length; i++) {
        if (array[i] === '-') {
            array[i+1] = '-' + array[i+1];
        } else {
            if (parseInt(array[i])) {
                abc.push(parseInt(array[i]));
            }
        }
    }
    let discriminar = abc[1] * abc[1] - 4 * abc[0] * abc[2] // Формула дискриминанта D = b^2 - 4ac
    let a = (-abc[1] + Math.sqrt(discriminar) ) / (2 * abc[0]);
    let b = (-abc[1] - Math.sqrt(discriminar) ) / (2 * abc[0]);


    if (a < b) {
        result.push(Math.round(a));
        result.push(Math.round(b));
    } else {
        result.push(Math.round(b));
        result.push(Math.round(a));
    }

    return result;

}
