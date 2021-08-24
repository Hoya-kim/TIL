# 20210824

## programmers - Level3

### 단어 변환

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/43163)

- [소스코드](./source_code/word_transform.js)

#### 문제개요
- begin : `"hit"`
- words : `["hot","dot","dog","lot","log","cog"]`
- target : `"cog"`

위와 같은 예시가 있다면,
1. 한 턴에 한 개의 알파벳을 바꿈
2. words내에 있는 단어로만 가능

예를 들어, `"hit" -> "hot" -> "dot" -> "dog" -> "cog"`와 같이 4단계를 거치면 해답 도출
- 최소 몇 단계를 거쳐야 하는지 *return*

#### 접근방법
- BFS로 접근
- 한 턴을 상태트리의 depth로 봄
- parent node에 대해, 한 글자만 다른 child를 엮으며 탐색