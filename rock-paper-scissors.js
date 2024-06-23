
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draws: 0
};

// if(score === null) {
//     score = {
//         wins: 0,
//         losses: 0,
//         draws: 0
//     };
// }

updateScoreElement();

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'scissors') {

        if(computerMove === 'scissors') {
            result = 'Draw.';
        } 
        else if(computerMove === 'rock') {
            result = 'You lose.';
        }
        else if(computerMove === 'paper') {
            result = 'You win.';
        }

    }

    else if (playerMove === 'paper') {
        

        if(computerMove === 'paper') {
            result = 'Draw.';
        }

        else if(computerMove === 'scissors') {
            result = 'You lose.';
        }

        else if(computerMove === 'rock') {
            result = 'You win.';
        }

    }

    else if (playerMove === 'rock') {

        if(computerMove === 'rock') {
            result = 'Draw.';
        }

        else if(computerMove === 'paper') {
            result = 'You lose.';
        }

        else if(computerMove === 'scissors') {
            result = 'You win.';
        }
        
    }

    if(result === 'You win.') {
        score.wins++;
    }

    else if (result === 'You lose.') {
        score.losses++;
    }

    else if (result === 'Draw.') {
        score.draws++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `<span class = "large-font">You<span> <img src = "Images/${playerMove}-emoji.png" class = "move-icon"> <img src = "Images/${computerMove}-emoji.png" class = "move-icon-result"> <span class = "large-font">Computer<span>`;

}

function updateScoreElement() {

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}

function pickComputerMove() {

    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }

    else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }

    else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;

}

function autoPlay() {
    setInterval(function() {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000)
}