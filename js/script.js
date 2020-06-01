/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: Anna Gallishaw
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//***TO DO***//

//      add color changer
//      add coding comments

/*** 
 * `quotes` array 
***/

let quotes = [
    
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
 * `getRandomQuote` function
***/

let getRandomQuote() = () => quotes[Math.floor(Math.random() * quotes.length)]{
    
 // How do I write the return statement here? Should I even have it anymore now that I wrote it as an arrow function? Read up on syntax. 

return quotes[getRandomQuote];

};
/*Checked my second step - the getRandomQuotes function - here.*/

// console.log(getRandomQuote);

/***
 * `printQuote` function
***/

let printQuote => [getRandomQuote]{

//All these if statements should be inside brackets - check arrow function syntax again. 
    
    let quoteHTML = `
        <p class = "quote">${randomQuote.quote}</p>
        <p class = "source">${randomQuote.source}
    `
    
    if ( randomQuote.citation ) {
        quoteHTML += `<span class = "citation">${randomQuote.citation}</span>`;
        }
    
    if ( randomQuote.year ) {
        quoteHTML += `<span class = "year">${randomQuote.year}</span>`;
        }
    
        if ( randomQuote.tags ) {
        quoteHTML += `<span class = "tags">${randomQuote.tags}</span>`;
        }

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
    
    quoteHTML += '</p>'
    
};

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
    document.querySelector( '#quote-box' ).innerHTML = quoteHTML;


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
