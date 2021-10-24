'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current-score--0');
const currentEl1 = document.getElementById('current-score--1');
const dice = document.querySelector('.dice');
const playerEl0 = document.querySelector(`.player--0`);
const playerEl1 = document.querySelector(`.player--1`);

// 1. resetting to default values.

scoreEl0.innerHTML = 0;
scoreEl1.innerHTML = 0;
currentEl0.innerHTML = 0;
currentEl1.innerHTML = 0;
dice.classList.add('hidden');

const scores = new Array(0, 0);
let currentScore = 0;
let activePlayer = 0;



//2. giving the roll btn functionality

btnRoll.addEventListener('click', function () {
    
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`

    if (diceRoll !== 1 ) {
        currentScore += diceRoll;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        document.getElementById(`current-score--${activePlayer}`).innerHTML = currentScore;
    } else {
        currentScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`current-score--${activePlayer}`).innerHTML = 0;
        activePlayer = activePlayer === 1 ? 0 : 1;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        document.getElementById(`current-score--${activePlayer}`).innerHTML = currentScore;
        
    }

    

})

//3. giving the hold btn functionality 

btnHold.addEventListener('click', function () {

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer];
    document.getElementById(`current-score--${activePlayer}`).innerHTML = 0;

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.getElementById(`score--${activePlayer}`).innerHTML = 100;
        dice.classList.add('hidden')
        btnHold.disabled = true;
        btnRoll.disabled = true;
    } else {
        currentScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`current-score--${activePlayer}`).innerHTML = 0;
        activePlayer = activePlayer === 1 ? 0 : 1;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        document.getElementById(`current-score--${activePlayer}`).innerHTML = currentScore;
    }
})

// 4. giving the new game functionality


btnNew.addEventListener('click', function () {
    currentScore = 0;
    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;
    currentEl0.innerHTML = currentScore;
    currentEl1.innerHTML = currentScore;
    scoreEl0.innerHTML = scores[0];
    scoreEl1.innerHTML = scores[1];
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    playerEl0.classList.remove(`player--winner`);
    playerEl1.classList.remove('player--winner');
    playerEl0.classList.add('player--active');
    playerEl1.classList.remove('player--active');
    btnRoll.disabled = false;
    btnHold.disabled = false;
})


