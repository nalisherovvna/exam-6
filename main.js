let cards = document.querySelector(".cards")

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => createCards(products))
    .catch(err => console.error('Error fetching data:', err));


function createCards(products) {

    products.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('card')



        let images = document.createElement('img');
        images.classList.add('card_img')
        images.src = product.image


        let card_h2 = document.createElement('h2');
        card_h2.classList.add('title')
        card_h2.textContent = product.title


        let card_p = document.createElement('p');
        card_p.classList.add('price')
        card_p.textContent = product.price

        card.append(images, card_h2, card_p)
        cards.appendChild(card)


    });

}