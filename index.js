var Word = require("./Word.js");

var inquirer = require("inquirer");


var numberGuesses = 10;

var wordArray = ["shetland sheepdog", "border collie", "boxer", "golden retriever", "poodle", "australian shepard", "german shepard", "great dane", "dalmation", "cocker spaniel", 
                "corgi", "greyhound", "mastiff", "whippet", "american bulldog", "rottweiler", "chihuahua", "airedale terrier", "beagle", "alaskan husky"];


// randomly selects a word and used the Word Construstor to store it

// num = Math.floor((Math.random() * 20) + 1);
// wordChoice = wordArray[num];
// console.log(wordChoice);
// wordsLetters = wordChoice.split("");
// chosenWord = new Word(wordChoice, wordsLetters);
// for (i = 0; i < wordsLetters.length; i++) {
//     chosenWord.addLetterArray(wordsLetters[i], false);
// }
// // console.log(chosenWord); 

// chosenWord.createWord();

var startGame = function() {
    numberGuesses = 10;
    num = Math.floor((Math.random() * 20) + 1);
    wordChoice = wordArray[num];
    console.log(wordChoice);
    wordsLetters = wordChoice.split("");
    chosenWord = new Word(wordChoice, wordsLetters);
    for (i = 0; i < wordsLetters.length; i++) {
        chosenWord.addLetterArray(wordsLetters[i], false);
    }
    // console.log(chosenWord); 

    chosenWord.createWord();

    inquirer.prompt([
        {
            type: "input",
            message: "Please guess letters in order to guess this word",
            name: "userGuess",
            // validate: function(input) {
            //     var done = this.async();

            //     setTimeout(function() {
            //         if (typeof input !== "string") {
            //             done("You need to provide a single letter");
            //             return;
            //         }
            //         done(true);
            //     }, 3000);
            // }
        }
    ])
    .then(function(inquirerResponse) {
        chosenWord.guessCheck(inquirerResponse.userGuess);
        chosenWord.createWord();
        
        nextGuess();
        // for ( j = 0; j < chosenWord.letterArray.length; j++) {
        //     letterArray[j].correctGuess(inquirerResponse);
        // }
    })


    var nextGuess = function() {
        if (numberGuesses > 0) {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Guess a letter",
                    name: "userGuess",
                    // validate: function(input) {
                    //     var done = this.async();

                    //     setTimeout(function() {
                    //         if (typeof input === "number" || typeof input === "symbol" || typeof input === "undefined") {
                    //             done("You need to provide a single letter");
                    //             return;
                    //         }
                    //         done(true);
                    //     }, 3000);
                    // }
                    
                }
            ])
            .then (function(guess) {

                chosenWord.guessCheck(guess.userGuess);
                var bool = chosenWord.guessCheck(guess.userGuess);
                if (chosenWord.guessCheck(guess.userGuess) === true) {
                    console.log("CORRECT!");
                } else {
                    console.log(bool + " INCORRECT!\n Number of guesses remaining: " + numberGuesses);
                    numberGuesses--;
                    console.log(chosenWord.letterArray);
                }
                var userAnswer = chosenWord.createWord();
                if (userAnswer === chosenWord.actualWord) {
                    console.log("You got it right! Here is the next word");
                    startGame();
                }
                
                chosenWord.createWord();

                

                nextGuess();
            })
        } else {
            console.log("You lose!")
        }

    }

}

startGame();




// prompts user for each guess and keeps track of user's remaining guesses

