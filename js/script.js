var quotes = [
  {
    quote: "Our heavenly Father has a thousand ways to provide for us, of which we know nothing.",
    source: "Ellen White"
  }, 
    {
    quote: "What You Do Speaks So Loudly that I Cannot Hear What You Say.",
    source: "Ralph Waldo Emerson",
    citation: "[RWEO] 1841, Essays [First Series] by Ralph Waldo Emerson, Essay IX: The Over-Soul, Page 236, James Munroe and Company, Boston, Massachusetts."
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
    source: "Walt Disney Company, Mulan",
    year: "1998"
  },
];
console.log(quotes)
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * quotes.length);  
  return quotes[quoteIndex];
  } 
var printQuote = function () {
  var randomQuote = getRandomQuote()
}
