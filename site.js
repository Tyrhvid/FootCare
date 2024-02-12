const tjänster = [
    {
        name: "Niklas",
        price: 5
    }
]

const ul = document.createElement("ul");

for (const tjänst of tjänster) {
    const prod = document.createElement("div");
    prod.classList.add("card")
    ul.appendChild(prod);
}