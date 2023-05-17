const card=document.querySelector(".card")
fetch("https://jsonplaceholder.typicode.com/todos")
.then((x)=>x.json())
.then((x)=>{
  x.forEach(i => {
    renderItem(i)
  })
})


function renderItem(item){
  const itemDiv=document.createElement("div")
  const titlespan=document.createElement("span")

  titlespan.innerText=item.title

  const useridspan=document.createElement("span")

  useridspan.innerText= "" +item.userid

  const id=document.createElement("span")

  id.innerText= ""+item.id

  itemDiv.appendChild(titlespan)
  itemDiv.appendChild(useridspan)
  itemDiv.appendChild(id)
  
  card.appendChild(itemDiv)
}

