var Letter = require("./Letter");


var Word = function(letterArray) {
    this.addLetterArray = function(character, guessed) {
        this.letterArray.push(new Letter(character, guessed))
    };
    this.letterArray = [];
    this.createWord = function() {
        var letters = this.letterArray;
        newWord = letters.toString();
        console.log(newWord.replace(/,/g, "",));
        return newWord.replace(/,/g, "",);
    };
    this.guessCheck = function(char) {
        var letters = this.letterArray;
        letters.forEach(function(let) {
        result = let.correctGuess(char);
        console.log(result);
        return result;
        })
    }

}

var cat = new Word();

cat.addLetterArray("c", true);
cat.addLetterArray("a", false);
cat.addLetterArray("t", true);


// cat.createWord();

// cat.guessCheck("a");