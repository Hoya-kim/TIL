# Union & find

## 개요

- 흔히 요소들을 grouping하고, 같은 group인지 물어보는 알고리즘 문제에 자주 나온다.
- 보통 이런 문제를 마주하면, `set()`을 이용해 실제로 필요한 집합만큼 grouping해서 풀었었다.
- 더 효율적인 방법으로 문제를 풀어보자


## Need to know

### 서로소(disjoint-set)
- 서로소 집합이란 교집합이 공집합인 상호 배타적인 관계를 가진 두 집합을 서로소 집합이라고 함

### Union & Find

- 알고리즘의 목적은 집합의 구현이지만, 트리를 이용 
- 구성간 필요한 메서드로는
    1. MakeSet(x)
        - 초기 각 노드가 각자의 집합을 의미, 각 노드가 루트 노드이고 N개 만큼의 노드를 생성하고, 집합 번호(index)로 초기화
    2. Find(x)
        - 각 노트의 루트 노드를 확인해, 어떤 집합인지 확인
    3. Union(x, y)
        - 루트 노드를 찾아 다른 집합이면, 두 트리를 합침


```js
let unf = Array.from({ length: n + 1 }, (_, i) => i)    // MakeSet 생략, 현 초기화 코드와 동일

function Find(v) {
    if (v === unf[v]) return v  // 집합번호와 노드의 값이 같으면, 루트 노드임을 의미, 루트이면 루트 노드를 반환
    else return unf[v] = Find(unf[v])   // 부연 설명
}

function Union(a, b) {
    let fa = Find(a)    // fa: a의 루트 노드(집합)
    let fb = Find(b)    // fb: b의 루트 노드(집합)
    if (fa !== fb) unf[fa] = fb     // 다른 집합이면(루트 노드가 다르면) 두 트리를 합침
}
```

#### find연산 최적화 : `return unf[v] = Find(unf[v])` 
루트 노드를 찾아감과 동시에 같은 루트노드일 경우(같은 집합일 경우), 각 노드를 루트노드로 변경하여 할당

![find 연산 최적화](https://gmlwjd9405.github.io/images/algorithm-union-find/path-compression.png)
출처 : [Heee's Development Blog](https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html)