// Part 1
function square(x){
      return x * x;
}
const result1 = (square(5));
const result2 = (square(8));
console.log(result1);
console.log(result2);




// Part 2
greet = (name) => {
    return `Hello, ${name}!`;

}
console.log(greet("Braden"));




// Part 3
function count(){
    let i = 5;
    while(i <= 5 && i > 0){
        function minus1(){
            console.log(i)
            i--;
        }
        minus1();
    }
}
count();




// Part 4
array = [1, 2, 3, 4, 5];
arrayadd = (function() {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    console.log(sum);
    return sum;
})(); 
