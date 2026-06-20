const inputBox = document.getElementById("input-box");
const listcContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listcContainer.appendChild(span);
    }
    inputBox.value  = "";
    saveData();
}

listcContainer.addEventListener("click",function(e){
    if(e.target.tagName === "Li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listcContainer.innerHTML);
}
function showTask(){
    localStorage.innerHTML = localStorage.getItem("data");
}
showTask();