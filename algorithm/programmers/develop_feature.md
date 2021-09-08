# 20210908

## programmers - Level2

### 기능개발

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/42586)

- [소스코드](./source_code/develop_feature.js)

#### 문제개요

- 각 기능의 개발 진행도 progresses와 개발 속도 speeds가 주어짐.
- 기능 개발이 완료되어도, 앞 순번의 기능들이 개발 완료되지 않으면, 배포할 수 없음.
- 배포날짜는 상관없음. 한 번 배포가 일어날 때 배포되는 기능의 수를 배열에 담을 것

#### 접근방법

- 처음에 스택, 큐 카테고리의 문제인지 모르고 풀었음.
- map을 이용해 각 기능이 개발완료되는 날짜를 뽑아냄.
- 개발 완료 시간이 오래걸리는 날을 max로 잡음
- max값이 바뀔 때가 기능 배포 시점
- solution1은 스택느낌으로 안품
- solution2는 스택느낌으로 풀었는데 효용성은 글쎄..
