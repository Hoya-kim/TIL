# 20210720 - JavaScript

---

## Modern JavaScript

강좌 수강

- 배열 내장함수
  - `forEach`
  - `map`
  - `indexOf`, `findIndex`, `find`
  - `filter` 
  - `splice`, `slice`
  - `shift`, `pop`, `unshift`, `push`
  - `concat`, `join`
  - `reduce`

<br>

---

## 배열 내장함수

### map

각 원소를 변환하여 새로운 배열로 재생산할 때 사용

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach version
// const squared = [];
// array.forEach(n => {
//     squared.push(n * n)
// })

// map version
const squared = array.map(n => n * n);
```



<br>

---

### filter / `indexOf`, `findIndex`, `find`

```javascript
const todos = [
    { id: 1, text: '자바스크립트 입문', done: true, },
    { id: 2, text: '함수 배우기', done: true },
    { id: 3, text: '객체와 배열 배우기', done: true },
    { id: 4, text: '배열 내장함수 배우기', done: false },
]

// 이런 객체 배열과 같은 경우 indexOf를 사용해서 검색 불가
// findIndex / 조건에 맞는 index값 return
const idx = todos.findIndex(todo => todo.id === 3)
console.log(idx)

// find / 조건에 맞는 value 값 return
const found = todos.find(todo => !todo.done)
console.log(found)

// filter / 조건에 맞는 값들의 배열 return
const taskNotDone = todos.filter(todo => todo.done);
console.log(taskNotDone)
```



<br>

---

### `shift`, `pop`, `unshift`, `push`

```javascript
const numbers = [10, 20, 30, 40];

const shifted = numbers.shift();    // 앞 요소 추출
console.log(shifted);   // 10

const poped = numbers.pop();    // 뒤 요소 추출
console.log(poped); // 40

numbers.unshift(5); // 앞에 추가
numbers.push(50);   // 뒤에 추가
console.log(numbers)    // [4, 20, 30, 50]
```



<br>

---

### `concat`

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
// const concated = [...arr1, ...arr2]; // spread 연산자 이용방법

console.log(arr1)   // [1, 2, 3]
console.log(arr2)		// [4, 5, 6]
console.log(concated)		// [1, 2, 3, 4, 5, 6]
```

> `concat`사용 시 기존 배열을 건드리지 않음



<br>

---

### `join`

```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join('')); // 12345
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```





<br>

---

### `reduce` *

```javascript
array.reduce((누적값, 현재값, 현재idx, 원본_array) => { }, 초기값)
```



```javascript
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum)	// 15

average = numbers.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current
}, 0);
console.log(average)	// 3
```



### example

```javascript
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e']
const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {})
console.log(counts);	// { a: 3, b: 1, c: 2, d: 1, e: 1 }
```

> 영단어 Reduce 본래 의미를 보자면,
> 단순하게 줄이다라는 의미보다 변경이라는 의미에 가깝습니다.
> "to change something into a simpler or more general form"
>
> 그 예시로 어떤 복잡한 수학문제를 다른 비슷한 문제로 변경해서 (더 간단하게만드려고) 푸는방법을 수학에서는 reduction이라고도 합니다.
> "In mathematics, reduction refers to the rewriting of an expression into a simpler form."
>
> 그런의미에서 완벽히 번역은 힘들지만 reduce는 "고쳐나간다" (간단하게만들기위해서, 혹은 특정규칙을 적용하기위해서) 라고 생각해보면 좋을것같습니다. 따라서, 주어진 상태를 고쳐나가는게 함수형 프로그래밍에서 자주보이는 reduce()함수입니다. [주어진상태].reduce([특정규칙]) => 변경된상태.
>
> 즉, 리덕스에서의 reduce()는 현재상태(previousState)를 새로운상태(newState)로 변경할때 쓰는 함수가됩니다.
>
> 리듀서에 대해서는:
>
> 리덕스 공식홈페이지에서의 설명은
> "여러분이 이 형태의 함수를 Array.prototype.reduce(reducer, ?initialValue)로 넘길 것이기 때문에 리듀서라고 부릅니다"
>
> 다시말해, 리듀서라고 불리는 이유는 리듀서가 reduce()함수에서 사용하는 콜백함수이기때문에 리듀서라고 불립니다.
>
>  -reducer 검색하다 발견한 **댓글** 작성자 **Jiwoo Choi**님 -원본글 [리듀서(Reducer)가 뭔가요?](https://devlog.jwgo.kr/2018/08/23/redux-which-is-weird-term/)

