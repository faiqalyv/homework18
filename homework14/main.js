const container1=document.querySelector(".container1")
const container2=document.querySelector(".container2")
const container3=document.querySelector(".container3")
const item=document.querySelector(".item")

item.addEventListener("drag",()=>{
 item.style.display="none"
})
item.addEventListener("dragend",()=>{
    item.style.display="flex"
})
container2.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
container2.addEventListener("drop",(e)=>{
    container2.appendChild(item)
})
container1.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
container1.addEventListener("drop",(e)=>{
    container1.appendChild(item)
})
container3.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
container3.addEventListener("drop",(e)=>{
    container3.appendChild(item)
})
   
