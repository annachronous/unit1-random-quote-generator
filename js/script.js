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

//TODO: remove some years and citations to achieve the grading rubric

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

/*Checked my first step - the quotes array - here.*/

//console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

    var randomQuote = Math.floor(Math.random() * quotes.length);
    
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
    
    randomQuote ["quotes"]

  // 3. Return the variable storing the random quote object

    return quotes[randomNumber];

}
/*Checked my second step - the getRandomQuotes function - here.*/

//console.log(getRandomQuote);

/***
 * `printQuote` function
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
    
var randomQuote = getRandomQuote();
    
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
}

//**TO DO NEXT**got this from jeffrey meesters github to see how it works...still unsure. Next steps: figure out how to get the element ID to update with the random quotes. reread how to use console log method since I don't seem to be grasping this very basic thing. reread random generator documentation and assemble a color changing background. why aren't the quotes I chose updating on the page? Is this a getElementID thing? <-- yes, it's in the project warmup it's the final step.

/*function printQuote() {
    // get a randomQuote object and store it in the randomQuote variable
    var randomQuote = getRandomQuote();
    return randomQuote;
}
*/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);