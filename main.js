let cards = [
    {
        id: 1,
        img: './assets/icons/low_price.png',
        title: 'Low Prices',
        description: 'Get a space at a low price. Don’t worry, we provide several storage package options to suit your needs.'
    },
    {
        id: 2,
        img: './assets/icons/secure.png',
        title: 'Secure',
        description: `We have a good security system for your files. So you don't need to be afraid that your files are lost or your account is compromised.`
    },
    {
        id: 3,
        img: './assets/icons/support.png',
        title: '24/7 Support',
        description: `24/7 customer support. We have customer support ready to help you if you have trouble. So don't hesitate to use our services.`
    },
    {
        id: 4,
        img: './assets/icons/lifetime.png',
        title: 'Lifetime',
        description: 'Make sure your downloads are always available and fast. You’ll never hit a bandwidth or download limit with ads..'
    },
]

let mySwipper = document.querySelector('.mySwiper')

const ReadCards = () => {
    cards.map((v) => {
        let card = document.createElement("swiper-slide")
        card.classList.add('card')
        card.innerHTML = `<div class='all_cards'>
          <img class="card_img" src='${v.img}'>
          <div class='card'>
          <h3 class='card_title'>${v.title}</h3>
          <p class='card_description'>${v.description}</p>
          </div>
        
        </div>`

        mySwipper.appendChild(card)
    })
}

ReadCards()


let inp = document.querySelector("input");
let textarea = document.querySelector("textarea");
let btn = document.querySelector('.submit-btn');
let bot_token = '7425914961:AAH6uRW57NTgccuYPLafbvWbJh9_czltL9Q';

btn.addEventListener('click', () => {
    let userEmail = inp.value.trim();
    let userQuestion = textarea.value.trim();
    inp.value = ''
    textarea.value = ''

    if (userEmail && userQuestion) {
        fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '959449247',
                text: `user's_email: ${userEmail} \nuser's_question: ${userQuestion}`
            })
        })

    }
});
