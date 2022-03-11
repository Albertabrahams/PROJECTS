const forward = document.getElementById("forward");
const back = document.getElementById("back");
const img = document.querySelector(".img");

let arr = ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg"];
count = 0;
forward.addEventListener("click", ()=>{
    count++
    if (count==arr.length){count=0;}
    img.src=arr[count]
    
})

back.addEventListener("click", ()=>{
    count--
    if (count==-1){count=(arr.length-1);}
    img.src=arr[count]
})

const autoshow = (count)=>{
    count++
    if (count==4){
        count=0;
    }
    else{
    img.src=arr[count];}
}

setTimeout(autoshow, 2000);