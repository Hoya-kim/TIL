# 20210923

## programmers - Level2

### 영어 끝말잇기

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/12981)

- [소스코드](./source_code/word_relay.js)

#### 문제개요

- n명의 사람이 돌아가며 끝맛잇기를 한다
- 이전에 등장했던 단어는 사용불가
- 끝말잇기가 성립하지 않으면 탈락
- 먼저 탈락하는 사람의 번호와 몇 번째 순서에서 탈락했는지 배열에 담아 반환

#### 접근방법

- 사용한 단어는 `Set()`에 담고 중복되는지 확인
- 마지막 단어를 `let last`변수에 담고 끝맛잇기가 성립하는지 확인

```js
if (used.has(words[i]) || last[last.length - 1] !== words[i][0]) {
  // 탈락 조건
}
```

- 탈락하는 사람의 번호
  ```js
  answer.push((i % n) + 1);
  ```
- 탈락하는 사람의 n번째 차례
  ```js
  answer.push(parseInt(i / n) + 1);
  ```
