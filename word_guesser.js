var wordLetters     = ['T', 'O', 'W', 'E','R'];
var guessedLetters  = ['_', '_', '_', '_','_'];

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('Oh no, thats not right!');
    }
}
guessLetter('V');
guessLetter('W');
guessLetter('O');
guessLetter('R');
guessLetter('T');
guessLetter('S');
guessLetter('E');
