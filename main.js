import SectionCards from "./components/sectionCards.js";

let cards = document.getElementById('cards');

let products = [
    {
        src: './images/collection-1.png'
    },
    {
        src: './images/collection-2.png'
    },
    {
        src: './images/collection-3.png'
    }
    
    
];

for(let index = 0; index < products.length; index++ ){
    
    cards.innerHTML += SectionCards(products[index])
}

