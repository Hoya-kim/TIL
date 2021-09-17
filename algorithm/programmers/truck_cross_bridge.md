# 20210917

## programmers - Level2

### 다리를 지나는 트럭

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/42583)

- [소스코드](./source_code/truck_cross_bridge.js)

#### 문제개요

queue를 이용한 문제이다.

- 트럭 여러 대가 강을 건너는데 걸리는 시간을 구한다
- 강을 건너는데 쓰이는 다리는 최대 weigth의 무게를 버틸 수 있다
- 다리에는 최대 briedge_length만큼의 트럭이 오를 수 있다
- truck_weights를 통해 트럭들의 무게가 배열로 주어진다.
- 건너는 트럭의 순서는 truck_weights 배열의 순서를 따른다.

#### 접근방법

- 다리 칸칸에 트럭이 오르지 않으면 0이라고 지정하였다
- 반복문을 돌며, 트럭이 있는 칸이 하나씩 당겨지게 하였다
- 다리에 오른 트럭의 무게는 sum으로 관리했다
- 반복문이 돌 때 마다 시간을 나타내는 count변수를 +1했다.
