//I am shooting for an 'Exceeds Expectations' grade with this submission.

//An indexed array of quotes and properties that will be referenced at random or conditionally.
var quotes = [
  {
    quote: "Our heavenly Father has a thousand ways to provide for us, of which we know nothing.",
    source: "Ellen White"
    }, 
  {
    quote: "What You Do Speaks So Loudly that I Cannot Hear What You Say.",
    source: "Ralph Waldo Emerson,",
    citation: "Essays [First Series] by Ralph Waldo Emerson,", //Additional property
    year: 1841 //Additional property
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
    scripture: "Click here for daily scripture!", //For use in my tag.
    link: "https://www.amazingfacts.org/bible-study/verse-of-the-day" //Link that I will use for my tag.
  },
  {
    quote: "The flower that blooms in adversity is the rarest and most beautiful of all.",
    source: "Walt Disney Company, Mulan"
  }
];

//pulls quotes at random
function getRandomQuote(quotes) // the 'quotes' variable is contained in the function called 'getRandomQuote'.
 {
  var quoteIndex = Math.floor(Math.random() * quotes.length);  // quotes.length is the value assigned to quoteIndex along with parameters.
  return quotes[quoteIndex]; //returns quotes from my index of quotes.
}
//console.log(getRandomQuote(quotes);

function printQuote() {//quotes will appear on the page
  var HTMLString = ""; //left HTMLString variable open with "" so its value can be reassigned.
  var randomQuote = getRandomQuote(quotes); //Assigned my getRandomQuote function from above to this variable. 
  HTMLString += '<p class="quote">' + randomQuote.quote + '</p>'; //Random quotes from my quoteIndex will print to the HTML page as 1st paragraph.
  HTMLString += '<p class="source">' + randomQuote.source; //Sources will appear with their attached quotes below the quote as another paragraph.
  if (randomQuote.citation) {
    HTMLString += '<span class="citation">' + randomQuote.citation + '</span>'; //Citations will appear next to the source of a quote.
  }
  if (randomQuote.year) {
    HTMLString += '<span class="year">' + randomQuote.year + '</span>'; //Years will appear next to the source and citation (if applicable) of a quote.
  }
  if (randomQuote.scripture) {
    HTMLString += '<a href="' + randomQuote.link + '">' + randomQuote.scripture + '</a>'; //Creates a clickable web link on the page which will.
    //HTMLString += "<span class='scripture'><p>" + randomQuote.scripture + "</p></span>";//Deleted this b/c it was concantinated w/link as an html tag.
  }
  // if (randomQuote.link) {
  //   HTMLString += "<span class='link'><p>" + randomQuote.link + "</p></span>"; //Deleted this b/c it was concantinated w/scripture as an html tag.
  // }
  HTMLString += "</p>"; //Closes the HTMLString source string.
  document.getElementById('quote-box').innerHTML = HTMLString; //The value of the HTMLString variables will appear on the document.
}
printQuote(); //This actiong calls the random quotes and any applicable attached source, citation, year, and/or link to appear on the page.
//console.log(printQuote);

//Creates the random color hex and sets the interval to a certain number of seconds.
setInterval( //function that runs random colors from the color hex
  function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //creates a random color hex under randomColor variable.
    document.body.style.backgroundColor = "#"+randomColor; //changes the background to a random color
}, 20000); //The number of seconds between random color changes (one second per 1000 milliseconds = 20 seconds).
//reference for the above codes is https://www.codespeedy.com/how-to-change-background-color-every-seconds-in-javascript/

//This function changes the quotes every 20 seconds in sync with the color background change
document.getElementById('loadQuote').addEventListener("click", printQuote, true); //Document will print quote to page every 20 seconds.
var intervalID = window.setInterval(myCallback, 20000);
function myCallback() {
  printQuote();
}
intervalID(); //calls into action the change of quotes every 20 seconds.

//This codes will continue to loop as long as this remains false or as the page is reloaded with a click.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);