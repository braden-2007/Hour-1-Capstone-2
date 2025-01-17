let count = 0;
number();

function number(){
    document.getElementById("num").innerHTML = count;
}

const buttonPlus = document.getElementById("button");
buttonPlus.addEventListener("mouseover", plus);


const buttonMinus = document.getElementById("button");
buttonMinus.addEventListener("mouseover", minus);

function plus(){
    count ++;
    number();
}

function minus(){
    count--;
    if(count < 0){
        count = 0;
    }
    number();
}