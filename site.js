class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const products = [
  new Product("Product 1", 2500, "https://example.com/path/to/image1.jpg"),
  new Product("Product 2", 1500, "https://example.com/path/to/image2.jpg"),
  new Product("Product 3", 1000, "https://example.com/path/to/image3.jpg"),
];

let cart = [];

const productList = document.querySelector("#product-list");
const cartUl = document.getElementById("cart");

let totalPris = 0;

function updateCart() {
  totalPris = 0;

  cartUl.innerHTML = "";

  for (const item of cart) {
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      cart.splice(cart.indexOf(item), 1);
      updateCart();
    };

    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const p = document.createElement("p");
    p.textContent = `${item.name} - ${item.price} kr`;

    totalPris += item.price;

    li.appendChild(p);
    li.appendChild(removeBtn);

    cartUl.appendChild(li);
  }

  const totalPrisElement = document.createElement("p");
  totalPrisElement.textContent = `Totalt: ${totalPris} kr`;
  totalPrisElement.id = "totalPris";
  cartUl.appendChild(totalPrisElement);
}

for (const product of products) {
  const li = document.createElement("li");
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardFooter = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const addToCartBtn = document.createElement("button");

  li.classList.add("list-group-item", "bg-dark", "border-danger");
  card.classList.add("card", "bg-dark", "container");
  cardBody.classList.add("card-body", "row");
  cardFooter.classList.add("card-footer", "row", "container");
  cardTitle.classList.add("card-title", "text-info", "text-center");
  addToCartBtn.classList.add("btn", "btn-success", "mx-1", "col");

  addToCartBtn.innerText = "Add to Cart";
  addToCartBtn.onclick = () => {
    cart.push(product);
    updateCart();
  };

  cardTitle.innerText = `${product.name} - ${product.price} kr`;

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.classList.add("img-fluid");

  cardBody.appendChild(img);
  cardBody.appendChild(cardTitle);
  cardFooter.appendChild(addToCartBtn);

  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  li.appendChild(card);

  productList.appendChild(li);
}
