function Letter(character, guessed) {
    this.character = character;
    this.guessed = guessed;
    this.toString = function() {
        if (!this.guessed) {
            // console.log("-");
            return "-";
        } else {
            // console.log(this.character);
            return this.character;
        }
    };
    this.correctGuess = function(guessChar) {
        if (guessChar === this.character) {
            // console.log(this.guessed = true)
            return this.guessed = true;
        } 
        // else {
        //     // console.log(this.guessed = false);
        //     return this.guessed = false;
        // }
    }
};


module.exports = Letter;