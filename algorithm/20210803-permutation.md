# Permutation
## DFS로 순열 구하기

1부터 n까지의 수 중에 m개의 순열을 구할 때

### 1. 중복 순열 (permutation with repetition)

```js
function permutationRepetition(n, m) {
    let answer = [], tmp = [];
    function DFS(L) {
        if (L === m) {
            // m개의 원소를 가진 순열을 찾았을 때
            answer.push(tmp.slice())
        } else {
            for (let i = 1; i <= n; i++) {  // 모든 원소들이 다음 순열의 다음순서로 올 수 있음
                tmp.push(i)
                DFS(L + 1)
                tmp.pop();
            }
        }
    }
    DFS(0)
    return answer
}
```

n개의 선택지 중에 n개 모두 선택할 수 있는 경우

<br>

---

### 2. 순열 (permutation)

중복 순열 다음에 한 이유가 있다

중복 순열에서 조건이 하나 추가되면 됌

```js
function permutation(n, m) {
    let answer = [], tmp = [];
    let ch = Array.from({ length: n + 1 }, () => 0) // 순열에 사용했는지 확인하기 위한 check array
    function DFS(L) {
        if (L === m) {
            answer.push(tmp.slice())
        } else {
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1
                    tmp.push(i)
                    DFS(L + 1)
                    tmp.pop();
                    ch[i] = 0   // pop했으니까 안 쓴 것으로 다시 초기화
                }
            }
        }
    }
    DFS(0)
    return answer
}
```