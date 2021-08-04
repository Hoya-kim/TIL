# Combination
## DFS로 조합 구하기

1부터 n까지의 수 중에 m개의 조합을 구할 때
### 방법1

```js
function combination(n, m) {
    let combi = []
    let tmp = []

    function DFS(num, cnt) {
        if (num > n + 1) return
        if (cnt === m) {
            // m개의 원소를 가진 조합을 DFS로 찾았을 경우
            combi.push(tmp.slice())
        }
        else {
            tmp.push(num)
            DFS(num + 1, cnt + 1)  // 현 순서의 원소를 조합에 넣을 경우
            tmp.pop()
            DFS(num + 1, cnt)   // 현 순서의 원소를 넣지 않을 경우
        }
    }
    DFS(1, 0);
    return combi
}
```

### 방법2
```js
function combination(n, m) {
    let combi = []
    let tmp = []

    function DFS(L, s) {
        if (L === m) {
            // m개의 원소를 가진 조합을 DFS로 찾았을 경우
            combi.push(tmp.slice())
        } else {
            for (let i = s; i <= n; i++) {  // 다음 순서로 올 수 있는 원소의 수 만큼
                tmp.push(i)
                DFS(L+1, i+1)
                tmp.pop()
            }
        }
    }
    DFS(0, 1);
    return combi
}
```

<br>

---

## 결론
각 결과는 같지만, 상태트리를 그려볼 경우 확연한 차이가 있다.

### 방법1의 상태트리

![combination1](https://user-images.githubusercontent.com/41777022/128104926-86d5cc55-9789-47e7-8160-fdfa16ac7b03.jpeg)

방법1의 경우 각 원소에 대해 DFS로 순회하며, 각 원소를 조합에 넣을지 넣지 말지의 두 가지 상태로 가지를 치며 조합을 구한다.

```plaintext
[1, 2, 3, ... , n]
```

1 ~ n 각 원소에 대해 넣을지 넣지 않을지에 대해 가지를 친다


### 방법2의 상태트리

![combination2](https://user-images.githubusercontent.com/41777022/128104934-cacf646b-95f6-4457-b156-384b1c686bf9.jpeg)

방법2의 경우 각 단계에서 다음으로 올 수 있는 원소의 가지 수에 따라 가지를 그리며 조합을 구한다.

```plaintext
[1, 2, 3, ... , n]
```

1 ~ n 각 원소의 순서에서 1 이후에 조합에 올 수 있는 2 ~ n에 대해 가지를 치고, 원소 2 순서에서는 3 ~ n가 이후에 올 수 있으므로, 해당 가지수에 대해 가지를 그리며 조합을 구한다.