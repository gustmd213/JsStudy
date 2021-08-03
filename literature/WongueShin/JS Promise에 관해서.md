# JS Promise에 관해서



```"A promise is an object that may produce a single value sometime in the future"```



Promise는 서버에서 받아온 데이터를 화면에 뿌려줄 때 사용한다. => 비동기 처리를 위해

<i>exam01 code</i>

```js
function getData(callbackFunc) {
    $.get('url/products/1', function(response) {
          callbackFunc(response);
          });
}

getData(function(tableData)) {
        console.log(tableData);
        }
```

JQuery의 ajax 통신 API 를 사용



```js 
function getData(callback) {
    return new Promise(function(resolve, reject) {
        $.get('url/products/1', function(response) {
            resolve(response);
        });
    });
}

getData().then(function(tableData) {
    console.log(tableData);
});
```

promise를 사용한 같은 내용의 예제.



#### Promise의 3가지 상태(states)

* <b>Pending</b>(대기) : 비동기 처리 로직이 아직 완료치 않은 상태
* <b>Fulfilled</b>(이행) : 비동기 처리가 완료되어 promise가 return value를 반환한 상태
* <b>Rejected</b>(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태



#### Pending(대기)

new Promise() 를 호출하면 pending 상태가 된다.

또한, 호출시에 콜백 함수를 선언 가능하고, 콜백함수의 인자는 resolve, reject이다.

```js
new Promise(function(resolve, reject) {
    //....
});
```



 #### Fulfilled(이행)

여기서 인자 resolve를 실행하면, Fulfilled 상태로 이행된다.

```js
new promise(function (resolve, reject) {
    resolve();
});
```

그리고 이항상태로 진행되면, then()을 이용하여 return value를 받을 수 있다.

```js
fuction getData() {
    return new Promise(function(resolve, reject) {
        var data = 100;
        resolve(data);
    });
}

getData().then(function(resolvedData) {
    console.log(resolvedData);
})
```



#### Rejected(실패)

reject를 아래와 같이 호출하면, 실패 상태가 된다.

```js
new Promise(function(resolve, reject) {
    reject();
});
```

실패 상태가 되면,  그 이유를 catch() 로 받을 수 있다.

```js 
function getData() {
    return new Promise(function(resolve, reject) {
        reject(new Error("Request is failed"));
    });
}

getData().then().catch(function(err) {
   console.log(err); 
});
```



ex)

```js
function getData() {
    return new Promise(function(resolve, reject) {
        $.get('url/product/1', function(response) {
            if (response) {
                resolve(response);
            }
            reject(new Error("Request is failed"));
        });
    });
}

getData().then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
});
```



###  Promise Chaining

```js
function getData() {
    return new Promise({
        //...
    });
}

getData()
.then(function(data) {
    // ...
})
.then(function() {
    // ..
});
.then
```



##### 실사용 예제

```js
new Promise(function() {
    setTimeout(function() {
        resolve(1);
    }, 2000);
})
.then(function(result) {
    console.log(result);
    return result + 10;
})
.then(function(result) {
    console.log(result);
    return result + 20;
})
.then(function(result) {
    console.log(result);
});
```



###  error 처리는 가급적 catch()를 사용해야하는 이유

```js
function getData() {
    return new Promise(function(resolve, reject) {
        resolve(`hi`);
    });
}

getData().then(function(result) {
    console.log(result);
    throw new Error(`Error in then()`);
}, function(err) {
    console.log(`then error: `, err);
});
```

then( )의 첫번째 콜백 함수 내부에서 오류가 나는 경우는 잡지 못한다.



```js 
function getData() {
    return new Promise(function(resolve, reject) {
        resolve(`hi`);
    });
}

getData().then(function(result) {
    console.log(result);
    throw new Error(`Error in then()`);
}).catch(function(err) {
    console.log('then error', err);
});