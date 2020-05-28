/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: Anna Gallishaw
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
//var message = "";
//var red;
//var green;
//var blue;

/*** 
 * `quotes` array 
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
        year: "unknown year",
        citation: "Alexander King Presents Peter Altenberg's Evocations of Love",
        tags: "life goals"
    },
    
    {
        quote: "Start cultivating a relationship with poverty... I am not, mind you, against your possessing [riches], but I want to ensure that you possess them without tremors; and this you will only achieve in one way, by convincing yourself that you can live a happy life even without them, and by always regarding them as being on the point of vanishing.",
        source: "Seneca the Younger",
        year: "AD 65",
        citation: "Epistulae Morales ad Lucilium",
        tags: "wealth"
    },
    
    {
        quote: "You can think of a lot of things to make out of nothing, if you have to.",
        source: "Louise Dickinson Rich",
        year: 1942,
        citation: "We Took to the Woods",
        tags: "ingenuity"
    }
];


console.log(quotes);
/***
 * `getRandomQuote` function
***/

//function getRandomQuote () {
    //return Math.floor(Math.random() * quotes.length);
    

/***
 * `printQuote` function
***/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);