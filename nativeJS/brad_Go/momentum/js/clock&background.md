# randomness [ 배열 안에 객체 생성] [Math module] [createElement()] [appendChild()]

작성일시: 2021년 7월 6일 오후 5:19
작성자: 동현 고
최종 편집일시: 2021년 7월 6일 오후 6:38
회의 유형: Object

무작위로 명언을 화면에 출력하기

배경미지를 html에 추가하기

- **무작위로 명언 출력하기**

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

- **무작위로 배경화면 출력하기**

    # 작업 과정

    랜덤한 숫자 얻기 → 이미지 고르기 → 이미지를 body태그에 추가하기

    ## 1. 이미지 배열 만들기

    : 배열의 값은 img 폴더에 있는 이미지들과 이 images Array 안의 이름이 같게 하기!

    폴더 안에 있는 이미지 이름들을 JavaScript 파일에서도 똑같이 사용!

    ## 2. 이미지를 랜덤하게 가져와 저장하기

    ```jsx
    const chosenImage = images[Math.floor(Math.random() * images.length);
    ```

    ## 3. html에 이미지 추가하기

    ```jsx
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}`;
    ```

    - js에서 요소를 만들어서 html에 추가!!

    ## 4. bgImage를 body 내부에 추가하기

    ```jsx
    // 바디 요소의 끝에 bgImage요소를 붙인다. 
    document.body.appendChild(bgImage);
    ```

    ### appendChild()

    - 이 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 **마지막 자식**으로 붙인다.

    ### prependChild()

    - 이 메소드는 한 appendChild()와 같은 기능을 하지만 가장 **처음의 자식**으로 붙인다.

    # 완성 코드

    ```jsx
    // img 폴더 안에 있는 이미지 이름들과 동일하게 배열의 index값을 작성
    const images = ["0.jpg", "1.jpg", "2.jpg"];

    // index값을 random하게 줘서 변수에 저장
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    // 새로운 이미지 태그를 생성해서 소스를 설정하고 body의 끝에 img태그 붙여넣기
    // js에서 html 요소를 생성!!
    bgImage.src = `img/${chosenImage}`;
    document.body.appendChild(bgImage);
    ```