var theGame, theGameCanvas;
function Hangman() {
this.words = ['dog', 'cat', 'fish', 'parrot', 'hyena', 'lion', 'rhinocerous'];
this.secretWord = "";
this.badGuesses = [];
this.goodGuesses = [];
this.errorsLeft = 10;
this.wordSoFar = [];
}
Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
};
Hangman.prototype.checkLetter = function (letter) {
  var result;
  if(!letter.match(/[a-z]/)){
    alert('sorry, that is not a letter. please try a letter instead.')
    return;
  }
  if(this.badGuesses.includes(letter) || this.goodGuesses.includes(letter)){
    alert ("you've already guessed that letter please try another");
    return;
  }
  var that = this;
  if (this.secretWord.includes(letter)){
    this.goodGuesses.push(letter);
    result = true;
  } else{
    this.badGuesses.push(letter);
    result = false;
    this.errorsLeft -=1;
  }
  this.secretWord.split('').forEach(function(eachLetter, index){
    if(eachLetter ===  letter ){
      that.wordSoFar[index] = letter;
    }
  });
  console.log(this);