<h1>DOM?</h1>

<h4><b>DOM, JS 뭐가 다른걸까</b></h4>



<b>DOM의 정의</b>

=> Document Object Model

HTML or XML document와 상호작용하는 API


><b>그럼 API는 또 뭔데?</b>
=> Application Programming Interface
> Human User Interface와 대비대는 개념. 엔드유저가 직접 조작하기 위해 개발된 interface와는 달리, 소프트웨어로 조작하기 위해 개발된 소프트웨어와 소프트웨어를 이어주는 중간 가교역할이라고 생각하면 된다.

DOM은 document의 모든 node에 접근, 상호작용 할 수 있도록 브라우저에서 코드를 실행 할 수 있게 해주기 떄문에 웹에서 가장 많이 사용되는 API가 됬다.

> Document의 모든 노드?
>
> 그럼 Document는 트리구조인건가? yes
>
> HTML 문서 구조를 보면 알 수 있듯이 html -> body -> div-> ui-> li-> p 등으로 이어지는 트리구조인걸 확인 할 수 있다.



위에 설명했듯이, DOM은 API기 떄문에 DOM === JS는 아니다.

JS를 떠나서 다른 언어 ex) python 를 통해서도 HTML을 조작 할 수 있기 때문이다.



<b>DOM을 조작하면 웹사이트가 달라지는 이유</b>

html === 웹사이트 또한 아니다.

DOM으로 html을 조작하면, 그 조작된 html 문서를 가지고 브라우저가 렌더 트리를 생성해 각자의 브라우저 방식으로 렌더링된 결과물을 엔드유저에게 웹사이트라는 형식으로 보여주는것.

DOM으로 브라우저를 조정하는것이 아니라, HTML을 조정하면 그걸 가지고 브라우저가 웹 표준에 맞춰 렌더링 해주는 것.

따라서 대부분의 경우에서 DOM은 사용하는 브라우저가 뭔지 고민할 필요가 없는 범용성을 가지게 되는것이다! 

