let a = document.querySelector(".box1")
let b = document.querySelector("button")
let c = document.querySelector(".btn2")

let thismode = 0

b.addEventListener("click",() =>{
    if(thismode ==0){
        a.style.backgroundColor = "yellow"
        thismode =1 
    }
   
})

c.addEventListener("click",()=>{
    if(thismode ==1){
        a.style.backgroundColor = "lightgray"
        thismode = 0
    }
})