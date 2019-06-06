//I am shooting for an 'Exceeds Expectations' gradew with this submission.

//An indexed array of quotes and other objects that will later be referenced at random and/or conditionally...
var quotes = [
  {
    quote: "Our heavenly Father has a thousand ways to provide for us, of which we know nothing.",
    source: "Ellen White"
  }, 
  {
    quote: "What You Do Speaks So Loudly that I Cannot Hear What You Say.",
    source: "Ralph Waldo Emerson",
    citation: "Essays [First Series] by Ralph Waldo Emerson.",
    year: "1841"
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
  }
];

//pulls quotes at random
function getRandomQuote(quotes)
 {
  var quoteIndex = Math.floor(Math.random() * quotes.length);  //defines the parameters for appearance of quotes
  return quotes[quoteIndex]; //runs the quotes from the index above
};
//console.log(getRandomQuote(quotes);

function printQuote() //quotes will appear on the page
{
  var HTMLString = "";
  var randomQuote = getRandomQuote(quotes);
  HTMLString += "<p class='quote'>" + randomQuote.quote + "</p>"; // the quote will appear first
  HTMLString += "<p class='source'>" + randomQuote.source + "</p>"; // the source will appear afterwards
//if citation is available or true, it will appear after the quote
if (randomQuote.citation) { 
    HTMLString += "<span class='citation'>" + randomQuote.citation + "</span>"
}
//if year is available or true, it will appear with the quote
if (randomQuote.year) { 
    HTMLString += "<span class='year'>" + randomQuote.year + "</span>"
}
HTMLString += "</p>";
document.getElementById('quote-box').innerHTML = HTMLString; //
}
printQuote();

//the codes will continue to loop as long as this remains false or as the page is reloaded with a click
document.getElementById('loadQuote').addEventListener("click", printQuote, false); 
