const figures = [{
        // FIGURE 1
        image: './img/inyuasha.webp',
        name: 'Inuyasha (Eating) - Pop! Vinyl Figure',
        description: 'Inuyasha',
        price: '$27.00',
        link: 'https://www.ebgames.co.nz/product/toys-and-collectibles/302467-inuyasha-inuyasha-eating-pop-vinyl-figure'
    },
    { // FIGURE 2
        image: './img/sesshomaru.webp',
        name: 'Sesshomaru Glow - Pop! Vinyl Figure',
        description: 'Inuyasha',
        price: '$34.00',
        link: 'https://www.ebgames.co.nz/product/toys-and-collectibles/291422-inuyasha-sesshomaru-glow-pop-vinyl-figure'
    },
    { // FIGURE 3
        image: './img/levi.webp',
        name: 'Formal Levi - Pop! Vinyl Figure',
        description: 'Attack on Titan',
        price: '$24.95',
        link: 'https://www.popvinyl.nz/attack-on-titan-formal-levi-pop-vinyl-figure/'
    },
    { // FIGURE 4
        image: './img/armin.webp',
        name: 'Armin Arlert Metallic - Pop! Vinyl Figure',
        description: 'Attack On Titan',
        price: '$34.00',
        link: 'https://www.ebgames.co.nz/product/toys-and-collectibles/291696-attack-on-titan-final-season-armin-arlert-metallic-pop-vinyl-figure'
    },
    { // FIGURE 5
        image: './img/ryuk.webp',
        name: 'Ryuk - Pop! Vinyl Figure',
        description: 'Death Note',
        price: '$24.99',
        link: 'https://popstop.co.nz/product/death-note-ryuk-pop/'
    },
    { // FIGURE 6 
        image: './img/mahito.webp',
        name: 'Mahito (New Arms) - Pop! Vinyl Figure',
        description: 'Jujutsu Kaisen',
        price: '$26.95',
        link: 'https://www.popvinyl.nz/jujutsu-kaisen-mahito-pop-vinyl-figure/'
    },
    { // FIGURE 7
        image: './img/gojo.webp',
        name: 'Satoru Gojo - Pop! Vinyl Figure',
        description: 'Jujutsu Kaisen',
        price: '$26.99',
        link: 'https://www.popvinyl.nz/jujutsu-kaisen-satoru-goju-pop-vinyl-figure/'
    },
    { // FIGURE 8
        image: './img/itadori.webp',
        name: 'Yuji Itadori - Pop! Vinyl Figure',
        description: 'Jujutsu Kaisen',
        price: '$26.95',
        link: 'https://www.popvinyl.nz/jujutsu-kaisen-yuji-itadori-pop-vinyl-figure/'
    },
    { // FIGURE 9
        image: './img/zenitsu.webp',
        name: 'Zenitsu Agatsuma - Pop! Vinyl Figure',
        description: 'Demon Slayer',
        price: '$26.95',
        link: 'https://www.popvinyl.nz/demon-slayer-zenitsu-agatsuma-pop-vinyl-figure/'
    },
    { // FIGURE 10
        image: './img/nezuko.webp',
        name: 'Nezuko Kamado - Pop! Vinyl Figure',
        description: 'Demon Slayer',
        price: '$25.00',
        link: 'https://www.ebgames.co.nz/product/toys-and-collectibles/261342-demon-slayer-nezuko-kamado-pop-vinyl-figure'
    },
    {
        // FIGURE 11
        image: './img/hawks.webp',
        name: 'Hawks - Pop! Vinyl Figure',
        description: 'My Hero Academia',
        price: '$26.99',
        link: 'https://popstop.co.nz/product/my-hero-academia-hawks-pop-vinyl-figure/'
    },
    { // FIGURE 12
        image: './img/tamakki.webp',
        name: 'Tamaki Amajiki - Pop! Vinyl Figure',
        description: 'My Hero Academia',
        price: '$26.95',
        link: 'https://www.popvinyl.nz/my-hero-academia-tamaki-amajiki-pop-vinyl-figure/'
    },
    { // FIGURE 13
        image: './img/mew.webp',
        name: 'Mew - Pop! Vinyl Figure',
        description: 'Pokemon',
        price: '$27.00',
        link: 'https://www.animehouse.co.nz/products/funko-pop-pokemon-mew-pop-rs'
    },
    { // FIGURE 14
        image: './img/munchlax.webp',
        name: 'Munchlax - Pop! Vinyl Figure',
        description: 'Pokemon',
        price: '$29.75',
        link: 'https://www.ebgames.co.nz/product/toys-and-collectibles/282559-pokemon-munchlax-pop-vinyl-figure'
    },
    { // FIGURE 15
        image: './img/psyduck.webp',
        name: 'Psyduck - Pop! Vinyl Figure',
        description: 'Pokemon',
        price: '$27.00',
        link: 'https://www.animehouse.co.nz/products/funko-pop-pokemon-781-psyduck'
    },
    { // FIGURE 16 
        image: './img/ken.webp',
        name: 'Ken Kaneki - Pop! Vinyl Figure',
        description: 'Tokyo Ghoul',
        price: '$27.00',
        link: 'https://www.animehouse.co.nz/products/tokyo-ghoul-ken-kaneki-pop-figure'
    },
    { // FIGURE 17
        image: './img/killua.webp',
        name: 'Killua with Yoyo - Pop! Vinyl Figure',
        description: 'Hunter X Hunter',
        price: '$26.99',
        link: 'https://prolectables.nz/products/hunter-x-hunter-killua-with-yo-yo-pop-vinyl'
    },
    { // FIGURE 18
        image: './img/sunnmoon.webp',
        name: 'Sun/Moon Metallic - Pop! Vinyl Figure',
        description: 'Five Nights at Freddys',
        price: '$26.99',
        link: 'https://popstop.co.nz/product/fun71149/'
    },
    { // FIGURE 19
        image: './img/springtrap.webp',
        name: 'Springtrap - Pop! Vinyl Figure',
        description: 'Five Nights at Freddys',
        price: '$29.99',
        link: 'https://popstop.co.nz/product/fnaf-springtrap-fl-pop-e-rs/'
    },
    { // FIGURE 20
        image: './img/freddy.webp',
        name: 'Freddy - Pop! Vinyl Figure (Exclusive)',
        description: 'Five Nights at Freddys',
        price: '$29.99',
        link: 'https://popstop.co.nz/product/fnaf-freddy-fl-pop-e-rs/'
    }
]

const results = document.getElementById('results');

for (let i = 0; i < figures.length; i++) {
    results.innerHTML += `
    <div class="card">
        <img src="${figures[i].image}" alt="img">
        <div class="card-details">
            <h3>${figures[i].name}</h3>
            <p>${figures[i].description}</p>
            <div class="bottom-section">
                <h4>${figures[i].price}</h4>
                <a href="${figures[i].link}" target="_blank">BUY NOW </a>
            </div>
        </div>
    </div>
`
}