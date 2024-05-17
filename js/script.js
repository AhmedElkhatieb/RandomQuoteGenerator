var btn = document.getElementById("new-btn");
btn.onclick = generateQuote;
var quotes = [
  "Be yourself; everyone else is already taken",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "In three words I can sum up everything I've learned about life: it goes on.",
];
var authors = [
  "Oscar Wilde",
  "Marilyn Monroe",
  "Frank Zappa",
  "Albert Einstein",
  "Marcus Tullius Cicero",
  "Bernard M. Baruch",
  "Dr. Seuss",
  "Mae West",
  "Mahatma Gandhi",
  "Robert Frost",
];
var oldNum = -1;
var newNum;
function generateRandomNumber() {
  newNum = Math.round(Math.random() * 9);
  if (newNum === oldNum && newNum !== 9) {
    newNum++;
  } else if (newNum === oldNum && newNum === 9) {
    newNum--;
  }
  oldNum = newNum;
  return newNum;
}

function generateQuote() {
  var x = generateRandomNumber();
  var q = '"' + quotes[x] + '"';
  var a = "--" + authors[x];
  document.getElementById("quote").innerHTML = q;
  document.getElementById("author").innerHTML = a;
  console.log(x);
}