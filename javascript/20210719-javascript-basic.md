# 20210719 - JavaScript

---

## Modern JavaScript

강좌 수강

- 객체(Object)
  - 비구조화 할당
  - 객체 안에 함수 넣기
  - Getter와 Setter 함수
- 배열(Array)
  - 선언, push
  - 반복문
    - for, while
    - for...of, for...in
    - continue, break

<br>

---

## 객체

### 비구조화 할당 / 구조 분해 할당

- 블로깅 했음

  hoya's blog - https://hoya-kim.github.io/2021/07/19/destructuring-assignment/

  - 문법 및 용례 정리
    - 배열, 객체에서의 각 활용 방법
    - [기본 할당 패턴](https://hoya-kim.github.io/2021/07/19/destructuring-assignment/#%EA%B8%B0%EB%B3%B8-%ED%8C%A8%ED%84%B4)
    - [나머지(rest) 할당](https://hoya-kim.github.io/2021/07/19/destructuring-assignment/#%EB%82%98%EB%A8%B8%EC%A7%80-rest-%ED%95%A0%EB%8B%B9)
    - [기본값(Default values) 사용](https://hoya-kim.github.io/2021/07/19/destructuring-assignment/#%EA%B8%B0%EB%B3%B8%EA%B0%92-Default-values-%EC%82%AC%EC%9A%A9)
    - [변수 값 교환하기](https://hoya-kim.github.io/2021/07/19/destructuring-assignment/#%EB%B3%80%EC%88%98-%EA%B0%92-%EA%B5%90%ED%99%98%ED%95%98%EA%B8%B0)
    - [함수의 리턴 값 분해](https://hoya-kim.github.io/2021/07/19/destructuring-assignment/#%ED%95%A8%EC%88%98%EC%9D%98-%EB%A6%AC%ED%84%B4-%EA%B0%92-%EB%B6%84%ED%95%B4)
    - [반환값 무시](https://hoya-kim.github.io/2021/07/19/destructuring-assignment/#%EC%9D%BC%EB%B6%80-%EB%B0%98%ED%99%98%EA%B0%92-%EB%AC%B4%EC%8B%9C)



<br>

### 객체 안에 함수 넣기

```javascript
const dog = {
    name: '멈멍이',
    sound: '멍멍!',
    say: function() {
        console.log(this.sound);
    },
    // say: () => {    // this 인식 불가
    //     console.log(this.sound); // undefined
    // },
};

const cat = {
    name: '야옹이',
    sound: '야옹~',
};

cat.say = dog.say;
dog.say()	// 멍멍!
cat.say()	// 야옹~

const catSay = cat.say; // 선언과 동시에 this scope변경
catSay();	// undefined
```

> JavaScript에서의 `this`의 동작 방식에 대한 이해가 필요함.
>
> 객체의 메소드로 호출할 경우 `this`는 메소드를 포함하는 객체. 자체에 바인딩되나
>
> 화살표 함수는 `this`를 바인딩 하지 않기 때문에, 주변 스코프에서 `this`의 값을 찾을 수 없음.
> 
>
> `catSay`의 경우 객체 외부로 함수가 나오면서 `this`의 스코프가 `global`로 변경되어, 주어진 명령을 제대로 수행하지 못함.

- `this`에 대한 더 자세한 공부 및 정리필요 (추후 정리)



<br>

### Getter & Setter

- JavaScript 객체의 **접근자 프로퍼티** 
  - 본질은 **함수**, 프로퍼티를 get하고 set하는 역할을 데이터 프로퍼티의 이름으로 바인딩
    - `get` - 객체의 프로퍼티를 해당 자신의 프로퍼티를 가져올 때 호출되는 함수로 바인딩
      - 값을 가져올 때 마다 **호출**
    - `set` - 어떤 객체의 프로퍼티를 이 프로퍼티을 설정하려고 할 때 호출되는 함수로 바인딩
      - 값이 변경 될 때마다 **호출**

> 접근자란 객체 지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서 읽거나 쓸 수 있도록 제공하는 메서드를 말합니다. 객체의 프로퍼티를 객체 바깥에서 직접 조작하는 행위는 데이터의 유지 보수성을 해치는 주요한 원인입니다. - 아소 히로시, 모던 자바스크립트 입문 9.3

> 프로퍼티의 종류
>
> 	1. 데이터 프로퍼티(data property)
>  	2. 접근자 프로퍼티(accessor property)



- getName, setName 처럼 별도의 함수를 만들 필요없이 **일반적인 프로퍼티**처럼 보이게 할 수 있음

```javascript
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 8;
console.log(numbers.sum);
```

> `numbers._a` 처럼 직접 접근할 수 있으나, 유지보수성 즉, **상태관리**를 위해 직접적으로 접근하지 않는 것이 관습



#### [Object.defineProperty() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

요런 메서드가 있었음...!

=> 객체에 직접 새로운 속성을 정의하거나 이미 존재하는 속성을 수정한 후, 그 객체를 반환하는 메서드라고 함

```javascript
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
}

Object.defineProperty(numbers, 'a', {
    get() {
        return this._a;
    },
    set(value) {
        this._a = value;
        this.calculate();
    }
})


Object.defineProperty(numbers, 'b', {
    get() {
        return this._b;
    },
    set(value) {
        this._b = value;
        this.calculate();
    }
})
```

이런 식으로 구현가능

<br>

---

참고

- [벨로퍼트와 함께하는 모던 자바스크립트](https://learnjs.vlpt.us/basics/06-object.html)
- [JavaScript - 접근자 프로퍼티 getter setter - bigbroshin.log](https://velog.io/@bigbrothershin/JavaScript-%EC%A0%91%EA%B7%BC%EC%9E%90-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-getter-setter)