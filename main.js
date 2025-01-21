const  cardsData= [
    {title: "Card 1", description: "lorem"},
    {title: "Card 2", description: "lorem"},
    {title: "Card 3", description: "lorem"},
    {title: "Card 4", description: "lorem"},
    {title: "Card 5", description: "lorem"},
    {title: "Card 6", description: "lorem"}
];
const container = document.getElementById("cards-container");
for (const card of cardsData){
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    const titleElement = document.createElement('h2');
    titleElement.textContent = card.title;
    cardElement.appendChild(titleElement);
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = card.description;
    cardElement.appendChild(descriptionElement);
    container.appendChild(cardElement);
}
