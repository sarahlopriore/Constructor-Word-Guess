var Letter = require("./Letter");


function Word(actualWord, letterArray) {
    this.actualWord = actualWord;
    this.addLetterArray = function(character, guessed) {
        this.letterArray.push(new Letter(character, guessed))
    };
    this.letterArray = [];
    this.createWord = function() {
        var letters = this.letterArray;
        newWord = letters.toString();
        // wordComb = newWord.replace(/,/gi, "",)
        console.log(newWord.replace(/,/gi, "",));
        return newWord.replace(/,/gi, "",);
    };
    this.guessCheck = function(char) {
        var letters = this.letterArray;
        letters.forEach(function(let) {
        var result = let.correctGuess(char);
        console.log(result);
        // return result;
        if (result !== undefined) {
            return result
        }
        })

    }

}

// var cat = new Word();

// cat.addLetterArray("c", true);
// cat.addLetterArray("a", false);
// cat.addLetterArray("t", true);


// cat.createWord();

// cat.guessCheck("a");

module.exports = Word;