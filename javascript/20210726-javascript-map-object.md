# 20210726 javascript / map, object

## 개요
### 1. 본인의 알고리즘 풀이..
```js
function solution(s) {
    let answer, num = 0
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        let v = s[i]
        obj[v] = obj[v] + 1 || 1
    }

    for (const [key, value] of Object.entries(obj)) {
        if (value > num) {
            num = value
            answer = key
        }
    }
    return answer
}
```

<br>

### 2. 타인의 알고리즘 풀이
```js
function solutionA(s) {
    let answer;
    let sH = new Map();
    for(let x of s) {
        sH.set(x, sH.get(x)+1 || 1);
    }
    let max = Number.MIN_SAFE_INTEGER
    for (let [key, val] of sH) {
        if(val > max) {
            max = val
            answer = key
        }
    }   
    return answer;
}
```

<br>


### 뭐가달라? 🤔
- `Map()`의 사용

<br>

### 왜 `Map()`을 썻을까? `Object()`로도 풀 수 있는데.. 🥺

<br>

#### `Object` vs `Map`
 - Object 의 키는 String이며, Map의 키는 모든 값을 가질 수 있음
 - Object는 크기를 수동으로 추적해야하지만, Map은 크기를 쉽게 얻을 수 있다.
    > *`Object.keys(someObj).length` vs `someMap.size()`*
 - Map은 삽입된 순서대로 반복된다.
    > *The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values **in the order of entry insertion**. - Map, MDN*
    
    > *Although the keys of an ordinary Object are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on property order. - MDN*

    > 요약하면 `Object`의 순서는 항상 신뢰할 수 있는 것이 아니기 때문에, 순서에 따라 객체를 조회해야 한다면, `Map`을 쓰는 것이 맞다


<br>

#### MDN의 권장
- 실행 시까지 키를 알수 없고, 모든 키가 동일한 type이며 모든 값들이 동일한 type일 경우에는 objects를  대신해서 map을 사용해라. 
- 각 개별 요소에 대해 적용해야 하는 로직이 있을 경우에는 objects를 사용해라. 

<br>

### `Map`의 주요 기본문법
```js
let someMap = new Map();
let key = 'k'
let val = 9999
someMap.set(key, val)
someMap.get(key)    // 9999
someMap.has(key)    // true
someMap.size    // 1
```

<br>

### 깨알팁
```js
console.log(Number.MIN_SAFE_INTEGER)    // -9007199254740991
```
> 대부분의 경우 그냥 초기값을 `-1`이나 `0`과 같이 설정해도 되지만 가질 수 있는 가장 `Number`값을 넣는다는게 꽤 좀 있어보임..


<br>

#### Object 초기화

1. 내가 맨날 하던 짓 
```js
for (let i = 0; i < s.length; i++) {
    let v = s[i]
    if(!obj[v]) obj[v] = 1
    else obj[v]++
}
```

<br>

2. 단축 평가 논리 계산법

```js
for (let i = 0; i < s.length; i++) {
    let v = s[i]
    obj[v] = obj[v] + 1 || 1
}
```
> 배웠으면 써먹자..

