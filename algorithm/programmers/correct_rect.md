# 20210823

## programmers - Level2

### 멀쩡한 사각형

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/62048)

![문제 이미지](https://grepp-programmers.s3.amazonaws.com/files/production/ee895b2cd9/567420db-20f4-4064-afc3-af54c4a46016.png)

- [소스코드](./source_code/correct_rect.js)

#### 문제개요
- 가로1,세로1 크기의 정사각형으로 구성된 격자 형태의 직사각형이 있다
- 이를 반으로 접었을때, 접히지 않고 멀쩡한 사각형의 개수를 구하라

#### 접근방법
- 1차원 방정식의 형태를 이용했다
- 방정식은 `heigth / width` 의 기울기를 가지는 직선
- 각 x좌표를 방정식에 대입하고 소수부분을 버리면, 각 좌표에 들어갈 수 있는 사각형의 개수임을 이용한다

```js
for (let i = 0; i < w; i++) {
    answer += Math.floor(h * i / w)
}
```

<br>

---

#### check point
- 처음에 연산을 `h / w * i`로 수행했다.
- 이러면 한개의 테스트케이스를 틀리게 됨
- 이유는 실수연산에 대한 **오차**때문
    - 예를 들면, `2/3=0.666667`처럼 `66666....`인 숫자가 `666667`이 된다.
- 이를 해결하기 위한 방안
    1. 고정소수점연산을 사용
    2. 연산순서를 재배치 (나눗셈을 가장 마지막에)


참고 : [감사합니다. - 티스토리](https://pcb4.tistory.com/924)