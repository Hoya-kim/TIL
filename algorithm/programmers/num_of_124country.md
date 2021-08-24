# 20210823

## programmers - Level2

### 124 나라의 숫자

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/12899)

- [소스코드](./source_code/num_of_124country.js)

#### 문제개요
- 우리가 사용하는 10진법이 유사 3진법(?)으로 1,2,4 세가지 수로만 이루어진다
- 예를 들어, 1 => 1, 2 => 2, 3 => 4, 4 => 11, ...

#### 접근방법
- 진법변환과 같은 관점으로 접근
- 다만 자릿수가 바뀔때, share(몫)값을 하나 빼주며 loop를 돌게 한다.