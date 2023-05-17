const container = document.querySelector(".container")

fetch("https://dummyjson.com/products")
  .then((x) => x.json())
  .then((x) => {
    x.products.forEach((product) => {
    });
    renderItem(x.products)
  });

function renderItem(dataArray) {
  dataArray.forEach((product) => {
    const card = document.createElement("div")
    card.className = "card"
    const titleSpan = document.createElement("span")
    titleSpan.className = "title"
    const priceSpan = document.createElement("span")
    priceSpan.className = "price"
    const images = document.createElement("img")
    const emailIcon = document.createElement("i")
    emailIcon.className = "fa-solid fa-envelope"
    emailIcon.setAttribute("id", "icons")
    const heartIcon = document.createElement("i")
    heartIcon.className = "fa-solid fa-heart"
    heartIcon.setAttribute("id", "icons")
    const callme = document.createElement("span")
    callme.className = "callme"

    const image = product.images[0];
    const price = product.price;
    const title = product.title;

    titleSpan.innerText = `${title}`
    priceSpan.innerText = `${price} AZN`
    callme.innerText = "Zəng edin"

    emailIcon.style.color = "#8089a3"
    heartIcon.style.color = "#8089a3"

    images.src = image;

    card.appendChild(images)
    card.appendChild(titleSpan)
    card.appendChild(priceSpan)
    card.appendChild(emailIcon)
    card.appendChild(heartIcon)
    card.appendChild(callme)

    container.appendChild(card)
  })
}