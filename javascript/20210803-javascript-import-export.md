# 20210803 module import export

## 모듈 가져오기, 내보내기

### 사전 준비
그냥 module을 내보내고 가져다 쓰겠다고 import, export를 하게되면 마주하게 되는 Syntax Error

```shell
SyntaxError: Cannot use import statement outside a module
```



그리고 친절히 알려주는 node js

```shell
(node:21066) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
```

warning에서 알려준 것 처럼 아래와 같이 `"type": "module"`속성을 추가 하자
```json
// package.json
{
  ...

  "type": "module"

}
```

> 만약 package.json이 없다면, `$ npm init`을 통해 *package.json*을 추가해 주도록 하자₩

---

### 사용법

#### export

예시

```js
// export할 class
class maxHeap { ... }
class minHeap { ... }
    
export { maxHeap, minHeap }
```


#### import

예시

```js
import { maxHeap, minHeap } from "./heap.js"
```
