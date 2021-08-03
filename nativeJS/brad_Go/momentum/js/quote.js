// 명언이 10개가 담긴 배열 생성, 
const quotes = [
  // object 형태로 index 저장
  // 각 index에는 명언 text와 그 저자가 들어 있다. 
  {
    quote: "Impossible. That's not true, that's just an opinion.",
    author: "Muhammad Ali",
  },
  {
    quote: "Speak when you are angry -- and you will make the best speech you'll ever regret.",
    author: "Laurence J.Peter",
  },
  {
    quote: "If we all did the things we are capable of doing, we would literally astound ourselves.",
    author: "Thomas A.Edison",
  },
  {
    quote: "Ability is of little account without opportunity.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "Do you want to spen the rest of your lif selling sugared water or do you want a chance to change the world?",
    author: "Steve Jobs",
  },
  {
    quote: "Love all, trust a few. Do wrong to none.",
    author: "William Shakespeare",
  },
  {
    quote: "Before he sets out, the traveler must possess fixed interests and facilities to be served by travel.",
    author: "George Santayana",
  },
  {
    quote: "True life is lived when tiny changes occur.",
    author: "Leo Tolstoy",
  },
  {
    quote: "The way to procure insults is to submit to them: a man meets with no more respect than he exacts.",
    author: "William Hazlitt",
  },
  {
    quote: "The gratification comes in the doing, not in the results.",
    author: "James Dean",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 배열의 길이를 곱해서 배열의 길이 - 1의 숫자만 나오게 설정
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;