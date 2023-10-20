const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: " - Oscar Wilde",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: " - Steve Jobs",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: " - Albert Einstein",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: " - Robert Frost",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: " - Edmund Burke",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: " - Confucius",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: " - Confucius",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: " - Peter Drucker",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: " - Charles R. Swindoll",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: " - Nelson Mandela",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//random - 0~1 사이의 랜덤한 숫자 floor - 내림 round - 반올림 ceil - 올림
