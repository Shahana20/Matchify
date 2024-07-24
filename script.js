// document.addEventListener('DOMContentLoaded', () => {
//     const grid = document.querySelector('#game-board');
//     const startButton = document.getElementById('start-game');
//     let cardsChosen = [];
//     let cardsChosenId = [];
//     let cardsWon = [];

//     const cardArray = [
//         { name: 'card1', img: 'images/csk.png' },
//         { name: 'card1', img: 'images/csk.png' },
//         { name: 'card2', img: 'images/dc.png' },
//         { name: 'card2', img: 'images/dc.png' },
//         { name: 'card3', img: 'images/gt.png' },
//         { name: 'card3', img: 'images/gt.png' },
//         { name: 'card4', img: 'images/kkr.png' },
//         { name: 'card4', img: 'images/kkr.png' },
//         { name: 'card5', img: 'images/rr.png' },
//         { name: 'card5', img: 'images/rr.png' },
//         // ...add more pairs as needed
//     ];

//     function shuffle(array) {
//         array.sort(() => 0.5 - Math.random());
//     }

//     function createBoard() {
//         shuffle(cardArray);
//         grid.innerHTML = '';
//         cardsWon = [];

//         for (let i = 0; i < cardArray.length; i++) {
//             const card = document.createElement('img');
//             card.setAttribute('src', 'images/blank.png');
//             card.setAttribute('data-id', i);
//             card.addEventListener('click', flipCard);
//             grid.appendChild(card);
//         }
//     }

//     function flipCard() {
//         let cardId = this.getAttribute('data-id');
//         if (!cardsChosenId.includes(cardId)) {
//             cardsChosen.push(cardArray[cardId].name);
//             cardsChosenId.push(cardId);
//             this.setAttribute('src', cardArray[cardId].img);
//             if (cardsChosen.length === 2) {
//                 setTimeout(checkForMatch, 500);
//             }
//         }
//     }

//     function checkForMatch() {
//         const cards = document.querySelectorAll('#game-board img');
//         const firstCardId = cardsChosenId[0];
//         const secondCardId = cardsChosenId[1];

//         if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
//             cards[firstCardId].style.visibility = 'hidden';
//             cards[secondCardId].style.visibility = 'hidden';
//             cards[firstCardId].removeEventListener('click', flipCard);
//             cards[secondCardId].removeEventListener('click', flipCard);
//             cardsWon.push(cardsChosen);
//         } else {
//             cards[firstCardId].setAttribute('src', 'images/blank.png');
//             cards[secondCardId].setAttribute('src', 'images/blank.png');
//         }

//         cardsChosen = [];
//         cardsChosenId = [];

//         if (cardsWon.length === cardArray.length / 2) {
//             alert('Congratulations! You found them all!');
//         }
//     }

//     startButton.addEventListener('click', createBoard);
// });

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const blankImg = new Image();
    blankImg.src = 'images/blank.png';
    blankImg.onload = () => {
        const blankWidth = blankImg.width;
        const blankHeight = blankImg.height;

        const cardArray = [
            { name: 'card1', img: 'images/csk.png', width: blankWidth, height: blankHeight },
            { name: 'card1', img: 'images/csk.png', width: blankWidth, height: blankHeight },
            { name: 'card2', img: 'images/dc.png', width: blankWidth, height: blankHeight },
            { name: 'card2', img: 'images/dc.png', width: blankWidth, height: blankHeight },
            { name: 'card3', img: 'images/gt.png', width: blankWidth, height: blankHeight },
            { name: 'card3', img: 'images/gt.png', width: blankWidth, height: blankHeight },
            { name: 'card4', img: 'images/kkr.png', width: blankWidth, height: blankHeight },
            { name: 'card4', img: 'images/kkr.png', width: blankWidth, height: blankHeight },
            { name: 'card5', img: 'images/rr.png', width: blankWidth, height: blankHeight },
            { name: 'card5', img: 'images/rr.png', width: blankWidth, height: blankHeight },
            // ...add more pairs as needed
        ];

        function shuffle(array) {
            array.sort(() => 0.5 - Math.random());
        }

        function createBoard() {
            shuffle(cardArray);
            grid.innerHTML = '';
            cardsWon = [];

            for (let i = 0; i < cardArray.length; i++) {
                const card = document.createElement('div');
                card.classList.add('card');
                card.style.width = `${blankWidth}px`; // Set width of card
                card.style.height = `${blankHeight}px`; // Set height of card

                const cardImage = document.createElement('img');
                cardImage.src = 'images/blank.png'; // Initially show blank image
                cardImage.setAttribute('data-id', i);
                cardImage.addEventListener('click', flipCard);
                card.appendChild(cardImage);
                grid.appendChild(card);
            }
        }

        function flipCard() {
            let cardId = this.getAttribute('data-id');
            if (!cardsChosenId.includes(cardId)) {
                cardsChosen.push(cardArray[cardId].name);
                cardsChosenId.push(cardId);
                this.src = cardArray[cardId].img; // Show the actual image
                if (cardsChosen.length === 2) {
                    setTimeout(checkForMatch, 500);
                }
            }
        }

        function checkForMatch() {
            const cards = document.querySelectorAll('#game-board .card img');
            const firstCardId = cardsChosenId[0];
            const secondCardId = cardsChosenId[1];

            if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
                cards[firstCardId].style.visibility = 'hidden';
                cards[secondCardId].style.visibility = 'hidden';
                cards[firstCardId].removeEventListener('click', flipCard);
                cards[secondCardId].removeEventListener('click', flipCard);
                cardsWon.push(cardsChosen);
            } else {
                cards[firstCardId].src = 'images/blank.png'; // Flip back to blank image
                cards[secondCardId].src = 'images/blank.png'; // Flip back to blank image
            }

            cardsChosen = [];
            cardsChosenId = [];

            if (cardsWon.length === cardArray.length / 2) {
                alert('Congratulations! You found them all!');
            }
        }

        startButton.addEventListener('click', createBoard);
    };
});
