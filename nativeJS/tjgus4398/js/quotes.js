const quotes = document.querySelector("#quotes span:first-child");
const meanings = document.querySelector("#quotes span:last-child");

const quoteList = [
    {quote: "Acta Non Verba",
    meaning: "말 대신 행동으로"},
    {quote: "Audi alteram partem",
    meaning: "다른 사람의 말을 들어라"},
    {quote: "Homines, dum docent, discunt",
    meaning: "가르치는 사람이 배운다"},
    {quote: "Non est bonum esse hominem solum",
    meaning: "사람이 홀로 있는 것은 좋지 않다"},
    {quote: "Nosce Te Ipsum",
    meaning: "너 자신을 알라"},
    {quote: "Qualis dominus talis est servus",
    meaning: "그 주인에 그 노예"},
    {quote: "Quidquid latine dictum sit altum videtur",
    meaning: "라틴어로 쓰여진 것은 무엇이든 심오해보인다"},
    {quote: "Usus magister est optimus",
    meaning: "경험은 가장 좋은 스승이다"},
] 

const paintQuotes = quoteList[Math.floor(Math.random() * quoteList.length)];

quotes.innerText = paintQuotes.quote;
meanings.innerText = paintQuotes.meaning;