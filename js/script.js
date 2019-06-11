//I am shooting for an 'Exceeds Expectations' grade with this submission.

//An indexed array of quotes and other objects that will later be referenced at random and/or conditionally...
var quotes = [
  {
    quote: "Our heavenly Father has a thousand ways to provide for us, of which we know nothing.",
    source: "Ellen White"
    }, 
  {
    quote: "What You Do Speaks So Loudly that I Cannot Hear What You Say.",
    source: "Ralph Waldo Emerson,",
    citation: "Essays [First Series] by Ralph Waldo Emerson,",
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
    quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    source: "Warren Buffett"
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    source: "Maya Angelou"
  },
  {
    quote: "The measure of who we are is what we do with what we have.",
    source: "Vince Lombardi"
  },
  {
    quote: "And we know that in all things God works for the good of those who love Him, who have been called according to His purpose.",
    source: "Romans 8:28"
  },
  {
    quote: "Delight thyself in the Lord: and He shall give thee the desires of thine heart. Commit thy way unto the LORD; trust also in Him, and He shall bring it to pass.",
    source: "Psalm 37:4-5",
    scripture: "Click here for daily scripture!",
    link: "https://www.amazingfacts.org/bible-study/verse-of-the-day"
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
}
//console.log(getRandomQuote(quotes);

function printQuote() {//quotes will appear on the page
  var HTMLString = "";
  var randomQuote = getRandomQuote(quotes);
  HTMLString += "<p class='quote'>" + randomQuote.quote + "</p>"; //A random quote will be returned.
  HTMLString += "<p class='source'>" + randomQuote.source; //The source attached to the returned court will be returned.
  if (randomQuote.citation) {
    HTMLString += "<span class='citation'>" + randomQuote.citation + "</span>"; //citation will appear because it's a true value.
  }
  if (randomQuote.year) {
    HTMLString += "<span class='year'>" + randomQuote.year + "</span>"; //year will appear because it's a true condition.
  }
  if (randomQuote.scripture) {
    HTMLString += "<span class='scripture'><p>" + randomQuote.scripture + "</p></span>"; //scripture will appear because it's true.
  }
  if (randomQuote.link) {
    HTMLString += "<span class='link'><p>" + randomQuote.link + "</p></span>"; //link will appear because it's true.
  }
  HTMLString += "</p>";
  document.getElementById('quote-box').innerHTML = HTMLString; //This returns the quote box element.
}
printQuote(); //Executes appearance of quotes to page.
//console.log(printQuote);

//The codes will continue to loop as long as this remains false or as the page is reloaded with a click.
document.getElementById('loadQuote').addEventListener("click", printQuote, false); 

//Creates the random color hex and sets the interval to a certain number of seconds.
setInterval( //function that runs random colors from the color hex
  function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //creates a random color hex
    document.body.style.backgroundColor = "#"+randomColor; //changes the background to a random color
}, 20000); //The number of seconds between random color changes (one second per 1000 milliseconds).
//reference for the above codes is https://www.codespeedy.com/how-to-change-background-color-every-seconds-in-javascript/

//This function changes the quotes every 20 seconds in sync with the color background change
document.getElementById('loadQuote').addEventListener("click", printQuote, true);
var intervalID = window.setInterval(myCallback, 20000);
function myCallback() {
  printQuote();
}
intervalID();