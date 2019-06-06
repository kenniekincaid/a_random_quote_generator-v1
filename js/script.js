//The following array of codes will be chosen at random.
var quotes = [
  {
    quote: "Our heavenly Father has a thousand ways to provide for us, of which we know nothing.",
    source: "Ellen White"
  }, 
  {
    quote: "What You Do Speaks So Loudly that I Cannot Hear What You Say.",
    source: "Ralph Waldo Emerson",
    citation: "Essays [First Series] by Ralph Waldo Emerson.",
    year: 1841
  },
  {
    quote: "Life becomes easier and more beautiful when we can see the good in other people.",
    source: "Roy Bennett"
  },
  {
    quote: "Do one thing every day that scares you.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "The flower that blooms in adversity is the rarest and most beautiful of all.",
    source: "Walt Disney Company, Mulan"
  },
];
//The following code will print to quotes to the page.
console.log(quotes);

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
//The following code(s) will call the getRandomQuote function and print it to the page.
function printQuote(quotes) {
  var randomQuote = getRandomQuote(quotes);
  var HTMLString = '';
 HTMLString = HTMLString + '<p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>'
  // <p class="source"> [source here]
  //   <span class="citation"> [citation here] </span>
  //   <span class="year"> [year here] </span>
  // </p>');
 console.log(HTMLString);
  // <div> id.innerHTML = HTMLSTtring;</div>
} 



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.


//The following code(s) will randomly select and return a random quote.
function getRandomQuote(quotes) {
  var quoteIndex = Math.floor(Math.random() * quotes.length);  
  return quotes[quoteIndex];
}
console.log(getRandomQuote(quotes));

 

function getObject(citation) {
  var citation = "Essays [First Series] by Ralph Waldo Emerson.";
  // if ( == citation) {
  //   return citation();
  // }
}
// console.log(getObject(citation));