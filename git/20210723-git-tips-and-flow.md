# 20210723 - git tips & git flow
---

## Git Tips
### Tips in code edit
#### 1. 라인 이동 고려

```js
animals = ['rabbit', 'dog']     // 1번

animals = [     // 2번
​	'rabbit',
​	'dog'
]
```

> 예를 들어, 배열에 요소가 추가될 때, 
> 1번 처럼 선언하면, 배열의 요소가 추가될 때 마다 라인이 통으로 바뀜
> 2번 처럼 선언해야, 요소가 추가됨에 따라 라인별로 tracking 가능


<br>

#### 2. trailing comma

```js
animals = [
​	'rabbit',
​	'dog',          // <-- trailing comma
]
```

> 예를 들어. 배열에 요소가 한 개 추가될 때
> trailing comma가 없다면 라인 **두 줄**이 변한 것으로 찍힐 것임

<br>

#### 3. 파일 이름 변경

i) 디렉토리에서 GUI로 이름변경

ii) `$mv hello.py helloworld.py`

> i, ii 번 모두 file이 `delete, new`로 표기됨

iii) `$git mv hello.py helloworld.py`

> Right way! renamed로 표기, 파일 이력 유지를 위해 이렇게 하는 것이 좋음


<br>
---

### switch, restore

> 나온 것은 알고 있었음... 아직 손에 안 익었었는데 이제 고칠때가 된 듯..
> `git --help`에도 안 나옴;

`checkout`의 기능을 분리하여 나온 것

Git 공식문서에 보면, 
`checkout` - Switch branches or restore working tree files
`switch` - Switch branches
`restore` - Restore working tree files

#### 1. 브랜치 전환하기
```shell
$git checkout [branch name]
$git switch [branch name]

# 브랜치 생성 및 전환
$git checkout -b [new branch]   # 내가 자주 쓰던 것..
$git switch -c [new branch] # '-c' means 'create'
```

<br>

#### 2. 파일 되돌리기
```shell
$git checkout -- .
$git restore .

$git checkout -- helloworld.py
$git restore helloworld.py
```

<br>
---

### Unstaging
```shell
$git reset HEAD helloworld.py
```

<br>
<br>
---

## git-flow
> 예전에 해봤을 때는 그냥 수동으로 브랜치따서 했는데..
> tool이 있었다..ㅠ

### [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html%E3%85%8C)

#### 1. 초기화
```shell
$git flow init
```
> 브랜치 이름이라던지에 대한 옵션을 입력하면 그에 맞게 **기본 브랜치 구조**를 따준다.
> ex) `main`(구 `master`), `develop` <= 제일 기본

#### 2. 기능 개발
```shell
$git flow feature start [feature name]
```
> `develop`으로 부터 `feature` 브랜치를 생성해줌


#### 3. 기능 완료
```shell
$git flow feature finish [feature name]
```
> `feature`브랜치를 `develop`으로 `merge`
> `feature`브랜치 삭제


#### 4. Release
```shell
$git flow release start [RELEASE (ex. version)]
```
```shell
$git flow release finish [RELEASE]
```

> 이상, 기본 시나리오
> shell command를 대폭 줄여준다는 **장점**이 있다
> 실제로 경량화한 git flow였음에도 불구하고, 수동으로 git-flow를 구성할 때, 매우 귀찮았던 기억이 있음.
