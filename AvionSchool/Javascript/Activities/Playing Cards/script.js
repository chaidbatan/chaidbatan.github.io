// Create a function that accepts the array of cards and returns an array of shuffled cards.
// Create a function that accepts the array of shuffled cards and returns the array of cards arranged by suit (may not be ordered by value).
// Create a function that acccepts the array of shuffled cards and returns arranged by face or value in ascending / descending order.
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
console.log(deck);


function shuffledCards() {
    //for(let i = deck.length - 1; i > 0; i--) {
    for(let i = 0; i < deck.length; i++) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldValue = deck[newIndex]
        deck[newIndex] = deck[i]
        deck[i] = oldValue
    }
}
shuffledCards()
console.log(deck);



function arrangedCards() {
    deck.sort(function (a, b) {
        return a.suits - b.suits;
    });
}
arrangedCards()
console.log(deck);


function cardsInOrder() {

}
