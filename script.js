function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = document.getElementById('result-text');
    
    if (userChoice === computerChoice) {
        resultText.textContent = `It's a tie! Both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}
