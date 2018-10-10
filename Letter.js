function Letter(character, guessed) {
    this.character = character;
    this.guessed = guessed;
    this.userGuess = function() {
        if (!this.guessed) {
            console.log("_");
            return "_";
        } else {
            console.log(this.character);
            return this.character;
        }
    };
    this.correctGuess = function(guessChar) {
        if (guessChar === this.character) {
            console.log(this.guessed = true)
            return this.guessed = true;
        } else {
            console.log(this.guessed = false);
            return this.guessed = false;
        }
    }
};

var a = new Letter("a", false);

a.correctGuess("b");
a.userGuess();