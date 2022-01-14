<h1>익명함수 Lambda?</h1>

> <b>그게 뭔데</b>
>
> <i>Anonymous func (<b>A. K. A</b> Lambda func</i>)익명함수 의 기원은 수학, 컴퓨터과학분야 에서의 <i>Lambda calculus</i>(람다 대수)이다.<br/>람다 대수는 함수를 보다 간단하게 표기하는 방법을 의미하는데,
>
> func <i><b>s</b>(x, y) = x * x + y * y</i> 일때,<br/>func <i><b>s</b>(x, y)</i>의 <i>Lambda calculus</i>는 <i>(x, y) => x * x + y * y</i> 로 표기 가능하다.<br/>ex) 항등함수 <i><b>I</b>(x) = x</i>는  <i>x => x</i>의 형태로 표기 가능하다.
>
>  <b><i>Lambda calculus</i>의 특징</b>
>
> * 람다 대수는 반드시 이름을 가질 필요는 없다(익명성)  
> * 두개 이상의 입력이 있는 함수는 최종적으로 1개의 입력을 받는 람다 대수로 단순화 될 수 있다.<br/><i>(<b>x</b>, <b>y</b>) => <b>x * x + y * y</b></i> 는 <i><b>x</b> => ( <b>y</b> => <b>x * x + y * y</b> )</i> 와 같이 쓰일수 있다.<br/>이와같이 함수를 변한화는 것을 커링( <i>currying</i> )이라고 말한다.



<b><i>Anonymous function</i></b> (익명함수)

<i>Lambda calculus</i>로 부터 영향을 받아, 프로그레밍 언어에서 함수를 표현하는 방식 중 하나이다.<br/>여러 언어중에서 익명함수가 가지는 공통적인 특징은 일급 객체(<i><b>First-class citizen</b></i>) 이다. 함수의 인자로 넘겨받을 수 있으며, 결과값으로 리턴도 가능하고, 변수로서 값을 할당가능하다는 점을 말한다.<br/>에초에 이런 용도로 사용하기 위해서 개발된거니 당연하다고 할수도 있겠지만,,



<b><i>Lambda in Javascript</i></b>

<i>ES5</i>

```javascript
// ES5.1
[0, 1, 2, 3, 4].map(function(n) {return n * n;
});
// result (5) [0, 1, 4, 9 ,16]
```

ES2015에서는 Arrow function이 도입되어서 익명함수를 보다 lambda의 원형에 가깝게 표현 할 수 있게 되었다.

ES2015

```javascript
// ES2015
[0, 1, 2, 3, 4].map(n => n * n);
// result (5) [0, 1, 4, 9, 16]
```



<b><i>Lambda and Closure</i></b>

```javascript
// ex
function adder(a) {
    return function(b) {
        return a + b;
    }
}

const add5 = adder(5); // 5 -> a
add5(10); // 10 -> b
//result 15
```

함수 add5의 입장에서 볼 떄, 자신의 scope 내에 있는 <i>b</i>라는변수는 인자로 받은 변수이고, 해당 스코프 내에 위치하지만, <i>a</i>라는 변수는 어디서 와 사용되는지 알 수 없다. 이때 <i>a</i>를 자유 변수 (<i>Free variable</i>), <i>b</i>를 묶인 변수(<i>Bound variable</i>)이라 부른다.

위의 예제에서는 자유변수와 묶인변수를 하나씩 사용하고 있다.<br/>Lambda식은 사용하는 변수의 종류에 따라 두 종류로 구분되어지는데, 표현식에서 사용하는 변수들이 모두 묶인 변수일 때, 닫힌 람다식이라 부른다.<br/>표현식 의 변수 중 하나라도 자유변수가 포함될 경우 열린 람다식으로 구분된다.

<b><i>클로저</i></b>는 열린 람다식을 닫힌 람다식으로 만드는것을 이야기 한다.<br/>이는 람다식 내의 모든 자유변수를 스코프 내로 가져와 묶기 때문에, 클로저는 만들어진 환경을 기억하는것 처럼 보인다.



<b><i>Closure in Javascript</i></b>

```js
// ex
let a = 1;
function freeAdder(b) {
    return function(c) {
        console.log(`a: ${a} b: ${b} c: ${c}`)
        return a + b + c;
    }
}

let add2 = freeAdder(2);
add2(3);
// result 6

a = undefined;
add2(3);
//result NaN
```

