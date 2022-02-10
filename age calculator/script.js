const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown")

const loading = document.querySelector(".loading");
window.addEventListener("load", ()=>{
    loading.style.display = "block";
    //miliseconds in seTimeout
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    },1000)
    

    // years.innerHTML = 00;
// months.innerHTML = 00;
// days.innerHTML = 00;
// hours.innerHTML = 00;
// minutes.innerHTML = 00;
// seconds.innerHTML = 00;

let H2Elements = document.getElementsByTagName("h2");

// for (let index = 0; index < H2Elements.length; index++){
//     H2Elements[index].innerHTML = "00";
// }

let H2Elements2 = countdown.querySelectorAll("h2");
console.log("H2Elements2", H2Elements2);

H2Elements2.forEach((element) =>{
    console.log(element)
    element.innerHTML = "00";
});

// convert to array from html collection
// Array.from(H2Elements).forEach(el =>{
//     el.innerHTML = "00";
// });

[...H2Elements].forEach(el=>{
    el.innerHTML = "00";
});
});
let selectedBirthday = new Date();
console.log("today", selectedBirthday)
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event)=>{
    console.log("datestring", event.target.value);
    //convert to date from datestring
    selectedBirthday = new Date(event.target.value);
    console.log("dateObject", selectedBirthday);
    if(selectedBirthday > new Date()){
        alert("Doğum tarihiniz bugünden büyük olamaz!!");
        return;
    }
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";
    
    loading.style.display = "block"
    setInterval(updateCountdown,1000);
    setTimeout(()=>{
        loading.style.display = "none";
    },1000)
});
const updateCountdown = () =>{

}




