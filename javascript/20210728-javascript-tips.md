# 20210728 javascript / tips about methods

<br>

## 1. `isNaN()`
string으로 부터 숫자와 기호를 구분한다고 본인은 아래와 같이 짰다.

```js
let oper = ['+', '-', '*', '/'];
for (let x of s) {
    if(oper.includes(s[i])) {
        // ...
    } else {
        //...
    }
}
```

> `if` 4개 박을까, `switch` 쓸까, `ASCII`로 비교할까 고민하다 나름 생각한게 이거..

멍청했다. `isNaN()` 내장 메서드 하나를 새로 배우게 되었다.
그냥 `isNaN()`을 사용하면 된다.

<br>

## `isNaN()` vs `Number.isNaN()`

그런데 `isNaN()`메서드를 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN)에서 찾아보다가 재밌는 걸 알게됨.
ES6(ECMAScript 2015)에서는 `Number.isNaN()`이 추가됨.


<br>

### 왜 추가됨?

`isNaN()`의 경우 *특이 케이스*가 몇몇 존재하기 때문에 ES6기반으로 코드를 작성한다면, 특이 케이스가 교정되어 좀 더 **strict**한 `Number.isNaN()`을 사용할 것을 MDN은 권장하고 있음.

<br>

### 그래서 정확히 뭐가 다른가?

두 가지 메서드의 용도는 비슷. 차이점은 `Number.isNaN()`은 `isNaN()`에 비해 더 엄격함.
> 전역 isNaN() 함수와 달리, Number.isNaN()은 강제로 매개변수를 숫자로 변환하는 문제를 겪지 않습니다. 
> 이는 이제 보통NaN으로 변환됐을 값이 안전하게 전달되지만, 실제로는 NaN과 같은 값이 아님을 의미합니다. 
> 이는 또한 오직 숫자형이고 또한 NaN인 값만이 true를 반환함을 뜻합니다. - MDN


<br>

- `isNaN()` 메서드는 매개변수를 **강제로 `Number()`로 바꾸는 문제점**을 지니고 있음
게다가 케이스별로 다름 

> isNaN 함수의 인수가 Number 형이 아닌 경우, 그 값은 먼저 숫자로 강제됩니다. 
> 결과값은 그 뒤에 NaN인지 결정하기 위해 테스트됩니다. 
> 따라서 숫자 형으로 강제된 결과 유효한 비 NaN 숫자값(특히 강제될 때 숫자값이 0 또는 1을 주는 빈 문자열 및 불린 원시형)이 되는 비 숫자의 경우, "false" 반환값은 예기치 않을 수 있습니다 - MDN


<br>

```js
function solutionA(s) {
    let stk = [];
    for (let x of s) {
        if (isNaN(x)) {   // isNaN 사용
            let r = stk.pop(), l = stk.pop()
            if (x === '+') stk.push(l + r)
            else if (x === '-') stk.push(l - r)
            else if (x === '*') stk.push(l * r)
            else if (x === '/') stk.push(l / r)
        } else {
            stk.push(Number(x));
        }
    }
    return stk[0]
}
```

> 따라서 이런경우 `isNaN`대신 `Number.isNaN`을 사용하면 저 solution은 틀린 solution이 되어 버림.

<br>

## 2. `sort()`

### 의문점

알고리즘 문제를 풀다가 정렬을 해야하는 일이 생겼는데, 값이 동일한 경우 input순서를 유지하도록 하는 조건이 있었다.

모범답안으로 제시된 코드 속에 `.sort((a, b) => a.cnt - b.cnt)`가 있었고, 이 때 **input 순서가 유지가 되는가?** 라는 의문을 품고 리서치를 진행함.

### 결론

> `sort()` 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 **stable sort**가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다. - *MDN, Array.prototype.sort()*

위 설명 외에 다른 설명이 없다??! 🤯

![compatibility](https://user-images.githubusercontent.com/41777022/127525948-c01bbcb6-1e05-4dbc-87ba-9cb20498dde7.png)

는! 아래 호환성에 나와있었다;;

- IE 빼고는 stable sorting을 지원하였다 😌 편안.




<br>

## 3. `eval()`, `Function()`

### 개요

상단 `isNaN()` 메서드에서 사용했던 코드에서

```js
if (x === '+') stk.push(l + r)
else if (x === '-') stk.push(l - r)
else if (x === '*') stk.push(l * r)
else if (x === '/') stk.push(l / r)
```

이 부분이 마음에 들지 않았음.

바꿔봤자 `x === '+' && stk.push(l + r)` 이정도..?

이 네줄을 한 줄로 줄이고 싶었음.

문자열을 코드로 바꾸는 문법이 분명 있을 것이라고 생각했음.

<br>

### `eval()`

 - [MDN, eval()](https://developer.mozilla.org/ko/daocs/Web/JavaScript/Reference/Global_Objects/eval#eval%EC%9D%84%20%EC%A0%88%EB%8C%80%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80%20%EB%A7%90%20%EA%B2%83!)

`eval()` 메서드가 검색 결과 최상단에 떴음.

> 주의: 문자열로부터 eval()을 실행하는 것은 엄청나게 위험합니다. eval()을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. 아래에 eval을 **[절대 사용하지 말 것!](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval#eval%EC%9D%84_%EC%A0%88%EB%8C%80_%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80_%EB%A7%90_%EA%B2%83!)**을 확인하세요. - *MDN, eval()*


> eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수입니다. 악의적인 영향을 받았을 수 있는 문자열을 eval()로 실행한다면, 당신의 웹페이지나 확장 프로그램의 권한으로 사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래할 수 있습니다.

보안상 좋지 않단다.

<br>

### 대안 - `Function()`

- [MDN, Function()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)

> Function 생성자는 새 Function 객체를 만듭니다. 이 생성자를 직접 호출하여 동적으로 함수를 생성할 수도 있으나, 보안 문제 및 eval과 유사한(그러나 훨씬 덜 심각한) 성능 문제가 발생할 수 있습니다. 하지만 eval과 달리, Function 생성자는 전역 범위로 한정된 함수만 생성합니다. - *MDN, Function()*

이정도면 충분하다

아까의 코드를 아래와 같이 바꿀 수 있다. 👍

```js
let result = Function(`"use strict";return (${l}${s[i]}${r});`)()
stk.push(result)
```