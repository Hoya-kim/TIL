# 20210723 - JavaScript common sense

---

## Modern JavaScript

강좌수강
> JavaScript에서 상식으로 알아두면 쓸모 많은 것들

- 삼항 연산자
- Truthy & Falsy
- 단축 평가 논리 계산법 (short circuit evaluation)
- 함수의 기본 파라미터
- 조건문 팁 => 객체 활용
- 비구조화(구조 분해) 할당 =>  [hoya's dev blog](https://hoya-kim.github.io/2021/07/19/destructuring-assignment/)
- Spread operator
- scope
- hoisting

---



## Truthy & Falsy

### 기본 개념

js를 쓰다보면 흔히 접하게 되는 부분 (ex. `0 == false`, `undefined == false`...)

![mime](https://c17an.netlify.app/static/288cb1fa6f64fe39f00046c4e0eae297/0b533/meme.png)

> truthy : `true` 같은 것
>
> falsy : `false` 같은 것



<br>

### 용례1

#### null checking

일반적인 null checking

```javascript
function print(person) {
    if (person === undefined || person === null) {   // null checking
        return;
    }
    console.log(person.name);
}
```



truthy & falsy를 이용한 null checking

```javascript
function print(person) {	// null checking
    if (!person) return;
    console.log(person.name);
}
```

<br>

### 용례2

```javascript
// const truthy = value ? true : false;
const truthy = !!value
```

두 연산의 결과는 같음


<br>

### Note!

>- 대표적인 Falsy : `undefined`, `null`,`0`, `''`, `NaN`, `false`
>
>- 주의해야할 Truthy : `[]`, `{}`



<br>

---

## 단축 평가 논리 계산법

논리 연산자의 추가적인 활용법 ~~(이번에 처음 앎...)~~


<br>

### `&&` 연산자

```javascript
const dog = {
    name:  '멍멍이'
};
const dog2 = {}

function getName(animal) {
    if (animal) {
        return animal.name;
    }
    return undefined;
}

function getName(animal) {	// Same output
    return animal && animal.name	// *
}

console.log(getName(dog));	// '멍멍이'
console.log(getName(dog2));	// undefined
```

> **`&&` 연산자**
>
> Truthy한 값이 앞에 오면, 뒤의 값 return
>
> Falsy한 값이 앞에 오면, Falsy한 값 그대로 return



```javascript
console.log(true && 'hello');   // hello
console.log(false && 'hello');  // false
console.log('hello' && 'bye');  // bye
console.log(null && 'hello');  // null
console.log(undefined && 'hello');  // undefined
console.log('' && 'hello'); // ""
console.log(0 && 'hello');  // 0
console.log(1 && 'hello');  // hello
console.log(1 && 1);  // 1
```





<br>

### `||`연산자

```javascript
const namelessDog = {
    name: '',
}

function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const dogName = getName(namelessDog);
console.log(dogName);	// '이름이 없는 동물입니다.'
```

> **`||`연산자**
>
> Falsy한 값이 앞에 오면, 뒤의 값 return
>
> Truthy한 값이 앞에 오면, truthy한 값 그대로 return

```javascript
console.log(false || 'hello');  // hello
console.log('' || '이름없다');  // 이름없다
console.log(null || '널이다')   // 널이다
console.log(undefined || 'defined 되지 않았다') // define 되지 않았다
console.log(0 || '제로다')  // 제로다

console.log(1 || '1이다')   // 1
console.log(true || '여기 안본다.') // true
console.log('와아' || '여기 안봐요.')   // 와아
console.log([] || '노노')   // []
```





<br>

---

## 조건문 팁

=> 객체 활용

```javascript
function getSound(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        참새: '짹짹',
        비둘기: '구구구구',
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));

function makeSouud(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍')
        },
        고양이() {
            console.log('야옹')
        },
        비둘기: function () {   // 익명함수는 추천X
            console.log('구구구구')
        }
    }
    const task = tasks[animal];
    task ? task() : console.log('...?')
    return;
}

makeSouud('개')
makeSouud('비둘기')
makeSouud('인간')
```





<br>

---

## Spread operator

### 새로 안 것

```javascript
function sum(a, b, c, d, e, f, g) {
    return a + b + c + d + e + f + g;
}

function sum(...rest) {
    return rest.reduce((a, c) => a + c, 0)
}
```

> ~~이게 되네;~~ 첨 앎...





<br>

---

## scope

> scope는 추가적으로 정리해서 블로깅 할꺼임.

<br>

### `var` vs `let`, `const`

- `var` 는 기본적으로 `function scope`
- `let`, `const`는 기본적으로 `block scope`

```js
if (true) {
    var bar = 'bar';
    let baz = 'baz';
    const qux = 'qux';
}

// var로 선언된 변수는 함수 스코프의 어디에서나 접근할 수 있습니다.
console.log(bar); // "bar"
// let과 const로 정의된 변수는 정의된 블록 외부에서 접근할 수 없습니다.
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined
```

출처 : [yangshun/front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/kr/javascript-questions.md#%EB%AA%A9%EC%B0%A8)


<br>

### Lexical scope

```js
var number = 1;
function a() {
    var number = 10;
    b();
}
function b() {
    console.log(number);
}
a(); // 1
b(); // 1
```

출처 : [(JavaScript) Lexical Scope(Static Scope) and Dynamic Scope](https://medium.com/@yeon22/javascript-lexical-scope-static-scope-and-dynamic-scope-c4a9e941fab3)

> `var`던 `let`이던 결과는 같음.
>
> 상식적(?)으로 `10, 1`이 나올 것이라고 예상했다;;
>
> 그런데 결과는 `1, 1`



*Lexical scope*란 함수를 어디서 **선언**하였는지 에 따라 **상위 스코프가 결정**되는 것

- 호출순서가 아닌 **선언위치**에 따라 보면, `function b()`의 상위 스코프는 **전역**, 따라서 `number`가 `1`로 출력

> 함수의 호출 순서에 따라 상위 스코프가 결정되는 것을 *Dynamic Scope*라고 함 (Perl, Bash Shell 등에서 사용)
>
> 대부분의 프로그램 언어(JavaScirpt, C, Java등)는 *Lexical Scope*.





<br>

---

## Hoisting

JavaScript는 *컴파일 단계*에서 변수 및 함수를 메모리에 저장함.

그래서 마치 코드의 상단으로 변수 및 함수가 옮겨지는 것 처럼 동작 (*실제로는 옮겨지지 않음*)

> 함수, 변수를 선언 전에 사용하여도 에러를 내지 않음
>
> (단, 이 경우 변수는 초기화되지 않은 `undefined`로 지정됨)



물론, *es6*의 `let`, `const`는 hoist되지 않음

```js
console.log(foo); // undefined

var foo = 'foo';

console.log(baz); // ReferenceError: Cannot access 'baz' before initialization

let baz = 'baz';

console.log(bar); // ReferenceError: Cannot access 'baz' before initialization

const bar = 'bar';
```

출처 : [yangshun/front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/kr/javascript-questions.md#%EB%AA%A9%EC%B0%A8)


<br>

```js
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);	// "My cat's name is Chloe"
}
```

출처: [Hoisting - 용어 사전 | MDN](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)

