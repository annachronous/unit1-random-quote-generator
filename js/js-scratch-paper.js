/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: Anna Gallishaw
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
function createRandomQuote () {
  let quotes =[
    {quote1},
    {quote2},
    {quote3},
    {quote4},
    {quote5},
    {quote6},
  ];  
};


/***
 * `getRandomQuote` function
***/
let getRandomQuote = createRandomQuote();

function getRandomQuote () {
    return Math.floor(Math.random() * quotes.length);
    
}

for (let i =0; i<7; i++){
    let randomQuote = random6();
    quotes.push(random6());
  } 
return quotes 

/***
 * `printQuote` function
***/

function printQuote ();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
Build a Two Dimensional Array Project Code 
***/
// 1. Add a for loop -- to loop through each element in the suites array
// 2. INSIDE that loop, add another loop that loops through elements in the ranks array.
// 3. Inside the second, nested loop, create a new array named card, which is composed of a rank and a suite. For example ['King', '♥︎'].
// 4. Push that card onto the deck array. Once both loops complete running, the deck array will hold 52 elements, and each of those elements are themselves an array.
// 5. Finally, pass the new deck to the shuffle() function, and return the results.
function createDeck() {
  var suites = ['♠︎','♣︎','♥︎','♦︎'];
  var ranks = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4', '3','2'];
  var deck = [];
  // add your code below here:
  for (let i=0; i<suites.length; i++) {
   for (let j=0; j<ranks.length; j++) {
     let card = [];
     card.push(ranks[j], suites[i]);
     deck.push(card);
   }
  }
  return shuffle(deck);
}
// 6. Call the createDeck() function and store the results in a new variable named myDeck
let myDeck = createDeck();

/* 7. Use a for loop to loop through the deck and list each card in the order the appear in the newly shuffled array. Use the log() method to print out a message like this, once for each card:
"7 of ♥.︎"
*/
for (let i = 0; i<myDeck.length; i++) {
  console.log(myDeck[i][0]+ ' of ' + myDeck[i][1]);  
}