'use strict';

const btnRoll = document.querySelector('.btn--roll');
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current-score--0');
const currentEl1 = document.getElementById('current-score--1');
const dice = document.querySelector('.dice');

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

    if (diceRoll !== 1) {
        currentScore += diceRoll;
        document.getElementById(`current-score--${activePlayer}`).innerHTML = currentScore;
    } else {
        currentScore = 0
        activePlayer = activePlayer === 1 ? 0 : 1;
        document.getElementById(`current-score--${activePlayer}`).innerHTML = currentScore;
        
    }
})

