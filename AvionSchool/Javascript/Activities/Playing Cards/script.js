// Create a function that accepts the array of cards and returns an array of shuffled cards.
// Create a function that accepts the array of shuffled cards and returns the array of cards arranged by suit (may not be ordered by value).
// Create a function that accepts the array of shuffled cards and returns arranged by face or value in ascending / descending order.
// Create a function that deals a card (printed name should be like 'Ace of Spades', 'Two of Diamonds'). The number of cards in the deck should decrease per function call.
// OPTIONAL: After a shuffle, loop your deck by dealing five cards until the deck is exhausted. On each deal, print what kind of poker hand is dealt.

const suits = ["♠", "♣", "♥", "♦"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const deck = [];

for (var s = 0; s < 4; s++) {
    //console.log(suits[s]); 
    for (var v = 0; v < 13; v++) {
        //console.log(values[v] + suits[s]);
        deck.push(values[v] + suits[s]);
    }
}
//console.log(deck);


function shuffledCards() {
    for(let i = deck.length -1; i > 0; i--) {
    //for(let i = 0; i < deck.length; i++) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldValue = deck[newIndex]
        deck[newIndex] = deck[i]
        deck[i] = oldValue
    }
}
//shuffledCards()
//console.log(deck);


//split every item inside the sorting function
//get the first element // either suit or rank
//get the index
//then compare
function cardsBySuit() {
// temporary array holds objects with position and sort-value
  var mapped = deck.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
  })

// sorting the mapped array containing the reduced values
  mapped.sort(function(a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

// container for the resulting order
  var result = mapped.map(function(el){
    return deck[el.index];
  });
//  console.log(result);
}
//cardsBySuit()




const deckInOrder = [];
    for (var s = 0; s < 4; s++) {
        //console.log(suits[s]); 
        for (var v = 0; v < 13; v++) {
            //console.log(values[v] + suits[s]);
            deckInOrder.push(values[v] + suits[s]);
        }
    }
//ascending order
function ascendingOrder() {
    shuffledCards()
    return deckInOrder;
}
//ascendingOrder()
//console.log(deckInOrder);

//cards in descending order
function descendingOrder() {
    shuffledCards()
    return deckInOrder.reverse();
}
//descendingOrder()
//console.log(deckInOrder);


function dealCards() {
    
}
shuffledCards()
let newArray = [];
for ( j = 0; j < 5; j++) {
    let removed = deck.splice(0, 1);
   
    newArray[j] = removed
    //console.log(j);
    console.log(removed);
   
}
console.log(newArray);


//dealtCards = removed;
let removed2 = deck.splice(0, 5);
let dealtCards = [removed2, "b"];
//console.log(dealtCards);


//console.log(dealCards());
console.log(deck.length);

//console.log("want to play?");

//const readline = require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout
//});

//let name;
//while (name === "yes") {
//    readline.question('want to play?', name => {
//        console.log('hey there' + name);
//        readline.close();
//    });
//}
//let input; 
//do {
//    input = prompt('Enter text:');
//    console.log(input);
//} while (input !== ':q');



