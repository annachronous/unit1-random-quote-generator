/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: Anna Gallishaw
******************************************/

/*** 
 * `quotes` array including source, year, citation, and tag properties
***/

var quotes = [
    
  {
      quote: "Shared pain is lessened; shared joy, increased—thus do we refute entropy.",
      source: "Spider Robinson",
      year: 1977,
      citation: "Callahan's Crosstime Saloon",
      tags: "community"
  },
    
  {
      quote: "Anxiety is the dizziness of freedom.",
      source: "Søren Kierkegaard",
      year: 1844,
      citation: "The Concept of Anxiety",
      tags: "anxiety"
  },

  {
      quote: "For just one second, look at your life and see how perfect it is. Stop looking for the next secret door that is going to lead you to your real life. Stop waiting. This is it: there's nothing else. It's here, and you'd better decide to enjoy it or you're going to be miserable wherever you go, for the rest of your life, forever.",
      source: "Lev Grossman",
      year: 2009,
      citation: "The Magicians",
      tags: "contentment"
  },

  {
      quote: "I don't understand ambition...the highest delight in life [is]- to discover that you have capacities that surprise even you. So, ambition seems like a little side alley, an error in judgement, or a substitution of something trivial for what ought to be your real goal - self-surprise.",
      source: "Peter Altenberg",
      citation: "Alexander King Presents Peter Altenberg's Evocations of Love",
      tags: "life goals"
  },

  {
      quote: "Start cultivating a relationship with poverty... I am not, mind you, against your possessing [riches], but I want to ensure that you possess them without tremors; and this you will only achieve in one way, by convincing yourself that you can live a happy life even without them, and by always regarding them as being on the point of vanishing.",
      source: "Seneca the Younger",
      citation: "Epistulae Morales ad Lucilium",
      tags: "wealth, contentment"
  },

  {
      quote: "You can think of a lot of things to make out of nothing, if you have to.",
      source: "Louise Dickinson Rich",
      year: 1942,
      citation: "We Took to the Woods",
      tags: "ingenuity, life goals"
  }
    
];

/*Checked my first step - the quotes array - here.*/

//console.log(quotes);

/*** 
 * `colors` array to supply various background colors for my color changing function
***/

var colors = [
    
  '#ddbc91',
  '#97acec',
  '#6d959f',
  '#6cb169',
  '#a07a7f',
  '#317ba0'
    
];

/***
 * `getRandomQuote` function - pulls a random quote from the quotes array and returns it to be used in the printQuote function below
***/

function getRandomQuote() {
    
  "use strict";

  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return randomQuote;
}

/*Checked my second step - the getRandomQuotes function - here.*/

// console.log(getRandomQuote);

/***
 * `getRandomColor` function - changes the background color of the index.html every time the "show another quote" button is clicked by a user
***/

function getRandomColor() {
    
  "use strict";

  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  return randomColor;
}

/***
 * `printQuote` function - prints a random quote retrieved by the getRandomQuote function above to the index.html page and changes the background color of the index.html page
***/

function printQuote() {
    
  "use strict";

  var currentColor = getRandomColor();
  var currentQuote = getRandomQuote();

  var quoteHTML = `
    <p class="quote">${currentQuote.quote}</p>
    <p class="source">${currentQuote.source}
  `

    if ( currentQuote.citation ) {
        quoteHTML += `<span class = "citation">${currentQuote.citation}</span>`;
        }

    if ( currentQuote.year ) {
        quoteHTML += `<span class = "year">${currentQuote.year}</span>`;
        }

    if ( currentQuote.tags ) {
        quoteHTML += `<span class = "tags">${currentQuote.tags}</span>`;
        }
    
/***
* Selects the quote-box id in index.html and replaces the content with a new quote selected and returned by the getRandomQuote function above  
***/
    
  document.querySelector( '#quote-box' ).innerHTML = quoteHTML;

/***
* Selects the body style in styles.css and replaces the content with a new color selected and returned by the getRandomColor function above. 
* I learned this via w3schools.com - https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
***/
    
  document.body.style.backgroundColor = currentColor;

  quoteHTML += `</p>`;

  return quoteHTML;
  return currentColor;
    
};

/***
* Set interval method changes background color and quote automatically every ten seconds
* I learned the syntax for this method here: https://www.w3schools.com/jsref/met_win_setinterval.asp
***/

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);