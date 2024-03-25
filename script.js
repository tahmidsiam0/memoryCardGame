function cardGame() {
    let wholeGame = document.querySelector('.wholeGame'),
        card = document.querySelectorAll('.card'),
        questionMark = 'Images/question-mark.png',
        facebook = 'Images/facebook.png',
        messenger = 'Images/messenger.png',
        twitter = 'Images/twitter.png',
        instagram = 'Images/instagram.png',
        whatsapp = 'Images/whatsapp.png',
        youtube = 'Images/youtube.png',
        tiktok = 'Images/tiktok.png',
        telegram = 'Images/telegram.png',
        showCards = 0,
        firstCard,
        secondCard,
        firstCardSRC,
        arrayOfLogo = [facebook, messenger, twitter, instagram, whatsapp, youtube, tiktok, telegram, facebook, messenger, twitter, instagram, whatsapp, youtube, tiktok, telegram];
    arrayOfLogo.sort(() => Math.random() - 0.5);

    function render() {
        arrayOfLogo.forEach(logos => {
            let card = document.createElement('div'),
                image = document.createElement('img');
            card.appendChild(image);
            card.classList.add('card');
            card.children[0].src = questionMark;
            wholeGame.appendChild(card);
            card.addEventListener('click', function (event) {
                if (showCards < 2) {
                    showCards++;
                    if (showCards === 1) {
                        card.children[0].src = logos;
                        firstCard = card.children[0].src;
                        firstCardSRC = event.target;
                        console.log();
                    } else {
                        card.children[0].src = logos;
                        secondCard = card.children[0].src;
                        console.log(secondCard);
                        if (firstCard !== secondCard) {
                            card.children[0].style.animation = 'errorAnimation 0.4s 0s 1 linear';
                            firstCardSRC.style.animation = 'errorAnimation 0.4s 0s 1 linear';
                            setTimeout(() => {
                                card.children[0].src = questionMark;
                                firstCardSRC.src = questionMark;
                                showCards = 0;
                                card.children[0].style.animation = '';
                            firstCardSRC.style.animation = '';
                            }, 1000);
                        } else {
                            showCards = 0;
                        }
                    }
                }
            });
        });
    }
    render();

};
cardGame();