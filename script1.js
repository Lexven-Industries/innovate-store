const url1 = "https://fakestoreapi.com/products";

const container = document.querySelector(".product_container");

fetch(url1)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const boilerPlate = ` <div id="product-card">
    <div class="product-card-img-cont">
      <img src="${data[i].image}" alt="" class="product-card-img">
    </div>
    <div class="product-detail">
      <p class="name">${data[i].title}</p>
      <p class="price">${data[i].price}</p>
      <button class="atoc">add to cart</button>
    </div> 
  </div>`;
  
      container.innerHTML += boilerPlate;
      console.log(data[i]);
    }
  })
  .catch((err) => console.log(err));
