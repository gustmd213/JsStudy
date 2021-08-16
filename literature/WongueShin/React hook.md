<h3>React hook?</h3>

<b>먼저,</b> class 에서의 life-cycle function 모식도.



![](C:\Users\32152412\jsstudy_repo\JsStudy\literature\WongueShin\images\lifeCyclefunc.png)



<h6>Mounting phase</h6>

1. constructor 실행.
2. getDerivedStateFromProps 에서 props, state를 비교
3. component를 render
4. update DOM
5. componentDidMount 실행.

<h6>Updating phase</h6>

1. getDerivedStateFromProps 에서 props,state를 비교
2. shouldComponentUpdate 실행 -new props, state를 확인하고, rerender 필요성을 결정
3. rerender component
4. update DOM
5. componentDidUpdate 실행

<h6>Unmounting phase</h6>

1. compoenetWillUnmount 실행



<h5>Summery</h5>

생성: constructor -> getDerivedSateFromProps -> componentDisMount

업데이트: getDerivedStateFromProps -> componentDidUpdate

언마운트: componentWillUnmount



<h4><b> Hook에서는 useEffet()가 위 생명주기 함수들을 대체합니다</b></h4>

basic form of useEffect

```react
useEffect( () => {
    console.log("");
})
```

useEffect 는 기본적으로 componentDidMount, componentDidUpdate, componentWillUnmount, getDerivedStateFromProps의 역할을 모두 수행한다.

때문에, 위 예제는 comp가 마운트 된 후, 업데이트되고 난 후, 언마운트 되기 전 모두 실행된다.

useEffect는 두가지의 인자를 받는다. 하나는 useEffect가 실행할 함수이고, 두번째는 이 함수를 실행시킬 조건이다.

```react
useEffect(<function>, <array>)
```

useEffect는 함수를 반환할 수 있다.  이를 clean-up이라고 표현하고,

```react
useEffect( () => {
    console.log("");
    return(() = > func())
})
```

이 clean-up 함수는 useEffect가 실행될 때마다 실행된다.



<h5><b>ComponentDidUpdate</b> or <b>getDerivedStateFromProps</b></h5>

useEffect에 특정 state 혹은 props를 전달하면, 이 인자가 변할때, useEffect가 실행된다. => 이는 class에서 componentDidUpdate, getDerivedStateFromProps와 같은 역할을 수행한다.

```react
const { exampleProp } = props;
const [count, setCount] = useState(0);

useEffect( () => {
	console.log("count or exampleProp chaanged");
}, [count, exampleProp]);
```




<h5>ComponentDidMount</h5>

조건으로 state를 전달하면, 그 인자가 변화할 때만 useEffect가 실행되므로,<br/>따라서, 이 배열을 빈 배열로 전달하면 useEffect는 컴포넌트 마운트시에만 실행된다.<br/>이는 class에서 componentDidMount와 같은 역할이다.

```react
useEffect( () => {
    console.log("componentDidMount");
}, [])
```



<h5>ComponentWillUnmount</h5>

ComponentWillUnmount의 역할은 clean-up 함수를 통해 구현할 수 있다.<br/>컴포넌트가 Unmount될 때, 정리하거나 unscribe 해야할 것이 있다면, useEffect의 return값으로 전달한다.

```react
useEffect( () => {
    console.log("");
    return(() => exampleAPI.unsubscribe());
})
```

