const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);
const increment = x => x + 1;
const doubleValue = x => x * 2;
const decrease = x => x - 1;
const squaredMinusOne = x => x * x -1;
const plusTen = x => x + 10;
const half = x=> x / 2;

const processNumber = pipe(increment, doubleValue, decrease, squaredMinusOne, plusTen, half);
/* 
1 = 9
2 = 17
3 = 29
4 = 45
5 = 65
6 = 89
*/


// Get user input and forces it to be a number, if given a letter nothing happens
function getUserInput(){
    var userInput = processNumber(parseInt(document.getElementById("userInput").value));
    document.getElementById("name").innerHTML = "After some calculations, your new number is  " + userInput;
}