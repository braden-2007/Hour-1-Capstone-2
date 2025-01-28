let count = 0;
let currentTime = 3.0;
number();
time()
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

function number(){
    document.getElementById("num").innerHTML = count;
}


function countdown(){
    if(currentTime <= 0){
        stop();
    }
    else{
        currentTime = currentTime - 1;
        time()
    }
}

function time(){
    if(currentTime <= 0){
        clearInterval(interval3);
        console.log("DONE")
        currentTime = "DONE, Restart?"
    }
    document.getElementById("time").innerHTML = currentTime;
}