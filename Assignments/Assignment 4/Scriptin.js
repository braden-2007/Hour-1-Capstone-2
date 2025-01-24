function getRandomNum(max){
    return Math.floor(Math.random() * max)
}

const promise = new Promise(num => num(getRandomNum(20)))

promise.then(num => console.log("original number : " + num));

promise
    .then(green => green * 2)
    .then(purple => purple + 10)
    .then(orange => orange -5)
    .then(purple => console.log("Final number : " + purple));


