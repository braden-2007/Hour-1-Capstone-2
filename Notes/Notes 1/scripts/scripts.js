function createList(){
    let list = document.getElementById("list");
    
    list.innerHTML = "";
    
    for(let i = 1; i <= 10; i++){
        let listContent = list.innerHTML;
        listContent += "<li>WHY</li>";
        list.innerHTML = listContent;
    }
}

function clearList(){
    document.getElementById("list").innerHTML = "";
}

const buttonElement = document.getElementById("button");
buttonElement.addEventListener("mouseover", createList);
buttonElement.onmouseout = clearList;
buttonElement.style.backgroundColor = "red";
buttonElement.style.color = "yellow";

