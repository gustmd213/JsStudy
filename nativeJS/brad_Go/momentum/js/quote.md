# randomness [ 배열 안에 객체 생성] [Math module: random(), round(), ceil(), floor()]

작성일시: 2021년 7월 6일 오후 5:19
작성자: 동현 고
최종 편집일시: 2021년 7월 6일 오후 5:36
회의 유형: Object

무작위로 명언을 화면에 출력하기

array 안에 element에 접근하기

math 모듈 사용하기

# 배열의 길이만큼 랜덤으로 숫자를 주는 function

## Math module 이용하기

: js에서 기본으로 제공하는 것으로 숫자와 관련된 것을 제공

### method

- **random()**: 0부터 1사이의 랜덤한 숫자를 제공
- **round()**: 소수점의 숫자를 반올림해서 정수로 반환
- **ceil()**: 소수점의 숫자를 올림해서 정수로 반환
- **floor()**: 소수점의 숫자를 내림해서 정수로 반환

### 배열 길이 이하의 숫자를 랜덤으로 반환하기 위해

```jsx
// 배열 선언
const quotes = [...];

// 랜덤으로 생성한 숫자를 배열의 길이 이하로 정수형태로 반환해 quotes배열의 index number로 사용
// quotes[n]의 값을 todaysQuote 변수에 저장
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

/*
	강의를 보기 전 나는 정수형태로 반환하기 위해 
	Math.floor(Math.random() * quotes.length)를
	parseInt(Math.random() * quotes.length)로 적었었다. 그러나 이도
	floor()와 마찬가지로 소수점의 숫자를 내림으로 작용해 바꿔서 사용해도 될 것 같다.
*/
```

# 명언을 랜덤으로 화면에 출력하는 코드 작성

### html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Momentum App</title>
  </head>
  <body>
    <!-- username이 local storage에 저장되어 있는지에 따라서 결괏값을 선택해서 표시하기 위해 hidden class를 form과 h1에 적용 -->
    <form id="login-form" class="hidden">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="What is your name?"
      />
      <input type="submit" value="Log In" />
    </form>
    <h2 id="clock">00:00:00</h2>
    <h1 id="greeting" class="hidden"></h1>
		<!-- js로 명언을 담을 컨테이너 요소 추가  -->
    <div id="quote">
      <span></span>
      <span></span>
    </div>
    <script src="js/greeting.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quote.js"></script>
  </body>
</html>
```

### js

```jsx
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

// <span> 태그 안의 문자열을 배열의 quote와 author로 추가
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```