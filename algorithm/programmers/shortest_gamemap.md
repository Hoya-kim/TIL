# 20210824

## programmers - Level2

### 게임 맵 최단거리

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/1844)

- [소스코드](./source_code/shortest_gamemap.js)

![최단거리 문제 이미지](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/dc3a1b49-13d3-4047-b6f8-6cc40b2702a7/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B51_sxuruo.png)

#### 문제개요
- target지점에 도착하는 최단거리를 구하는 문제
- 벽으로 막혀있으면 갈 수 없다. (벽: `0`)
- 도달할 수 없으면 `-1` *return*

주어지는 `maps` 값 예시
- `n * m` 크기
- `[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]`

![maps 그림](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/6db71f7f-58d3-4623-9fab-7cd99fa863a5/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B56_lgjvrb.png)

<br>

#### 접근방법
- BFS로 접근
- 최단거리를 기록한 `dist`변수 선언 
- 탐색간 target지점에 도착하면 `dist[n-1][m-1]`값 리턴하여 *cut edges*
- 모든 탐색을 완료하였으나 답이 도출되지 않으면 `-1` 리턴