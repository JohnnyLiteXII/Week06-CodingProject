/*
Copyright (c) 2023 Promineo Tech
  Author:  Juan Mejia
  FE Lab Week 06 - Final Project





Instructions:

- In Visual Studio Code, write the code that accomplishes the objectives listed below and ensures that the code compiles and runs as directed.
- Comment your code, to prove that you understand what you have written -- this is required!
- Create a new repository on GitHub for this week's assignments and push your code to the repository.
- Create a Video showcasing your assignment.

Submit the two URL links for the GitHub repo and Video in the Text box.

Coding Steps:

- For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. 
   - In this version there are only 2 players.
- You do not need to do anything special when there is a tie in a round.
- Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
- You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.

The completed project should, when executed, do the following:

- Deal 26 Cards to each Player from a Deck of 52 cards.
- Iterate through the turns where each Player plays a Card.
- The Player who played the higher card is awarded a point.
  - Ties result in zero points for both Players.
- After all cards have been played, display the score and declare the winner.
- Write a Unit Test using Mocha and Chai for at least one of the functions you write.

Video Steps:

- Create a video, up to five minutes max, showing and explaining how your project works with an emphasis on the portions you contributed.
- This video should be done using screen share and voice over.
- This can easily be done using Zoom, although you don't have to use Zoom, it's just what we recommend.
   - You can create a new meeting, start screen sharing, and start recording.
   - This will create a video recording on your computer.
- This should then be uploaded to a publicly accessible site, such as YouTube.
   -Ensure the link you share is PUBLIC or UNLISTED!
   - If it is not accessible by your grader, your project will be graded based on what they can access.

*/


// Declared three classes: Deck, Player, Card

//Created the Deck class. 
class Deck {
  //Based on the construtor function: delcared the arrays for the type of cards(ranks, suits)
  constructor() {
    this.cards = [];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    
    //Created loop that will go through each value of the array and add it to the cards array. 
    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
    //Uses the Shuffle method below to mix the cards up
    this.shuffle();
  }

  //Declared the shuffle method. It looks are the length of the arrar cards and uses the Math.random() to 
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      //Used the Math.floor() function to have that returns the highest interger less than or equal to its argument
      const s = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[s]] = [this.cards[s], this.cards[i]];
    }
  }
  //Method that gives(removes) card out of the array
  dealCard() {
    return this.cards.pop();
  }
}

//Declared the Player class
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
  
  //This method allows the player to be able to play their card from the hand
  playCard() {
    return this.hand.pop();
  }
  //This method allows the player to add a card to hand
  addToHand(card) {
    this.hand.unshift(card);
  }
  //This method adds the points to the chosen player
  addPoint() {
    this.score++;
  }
}

//The Card Class: declared the constructor as rank and suit
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  //Created method getCardValue within the Card class 
  getCardValue() {
    //Declared an array that gives the value as faceCards to the Jack, Queen, King, Ace
    const faceCards = ['Jack', 'Queen', 'King', 'Ace'];
    return faceCards.includes(this.rank) ? 10 : parseInt(this.rank);
  }
//Declared method to return the values of rank and suits
  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

//Declared the Games class with the characterictic of the card game WAR
class Game {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.deck = new Deck();
    this.dealInitialHands();
  }
//Method within the game class that deals the cards to each player
  dealInitialHands() {
    while (this.playerA.hand.length < 26) {
      this.playerA.addToHand(this.deck.dealCard());
      this.playerB.addToHand(this.deck.dealCard());
    }
  }
//Method that play a round of card where playerA and playerB play a card
  playRound() {
    const cardA = this.playerA.playCard();
    const cardB = this.playerB.playCard();

    //Prints out the names of the plays along with each card played.
    console.log(`${this.playerA.name} plays: ${cardA.toString()}`);
    console.log(`${this.playerB.name} plays: ${cardB.toString()}`);

    const valueA = cardA.getCardValue();
    const valueB = cardB.getCardValue();

    //Loop that continues to compare the vaules of the cards and determines who wins
    if (valueA > valueB) {
      this.playerA.addPoint();
      console.log(`${this.playerA.name} wins this round!`);
    } else if (valueB > valueA) {
      this.playerB.addPoint();
      console.log(`${this.playerB.name} wins this round!`);
    } else {
      console.log("It's a tie!");
    }
  }
  //Method that uses the method playRound until there no more cards in playerA's hand
  playGame() {
    while (this.playerA.hand.length > 0) {
      this.playRound();
    }
  }
  //Method that displays the score of the players final score
  displayScore() {
    console.log(`Final Score:`);
    console.log(`${this.playerA.name}: ${this.playerA.score}`);
    console.log(`${this.playerB.name}: ${this.playerB.score}`);

    //As a function of the display score method it'll print out the player name each time which ever player has the higher score
    if (this.playerA.score > this.playerB.score) {
      console.log(`${this.playerA.name} wins!`);
    } else if (this.playerB.score > this.playerA.score) {
      console.log(`${this.playerB.name} wins!`);
    } else {
      console.log("It's a tie!");
    }
  }
}


// This runs the game as built in the classes above.
const playerA = new Player('John Crichton');
const playerB = new Player('Nathan Fillion');
const game = new Game(playerA, playerB);
game.playGame();
game.displayScore();