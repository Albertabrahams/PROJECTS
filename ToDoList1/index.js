let happy = document.getElementById("happy");
let day = document.getElementById("day");
let input = document.getElementById("input")
let task = document.getElementById("task");
let btn = document.getElementById("btn");

let a = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day.innerText = days[(a.getDay())]

btn.addEventListener("click", ()=>{
    if(input.value==""){
        alert("Please enter a task")
        return
    }
    let line = document.createElement("p");
    line.innerHTML = input.value
    task.appendChild(line)
    let hr = document.createElement("hr")
    line.appendChild(hr)
    input.value = ""
    
})
