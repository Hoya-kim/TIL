# 20210908 컴파일러, 인터프리터

컴파일러와 인터프리터 둘 다, high-level language로 작성된 프로그래밍 언어를 하드웨어를 제어할 수 있는 low-level language로 변환하는 것은 동일

> 참고<br>
> 하이레벨과 로우레벨의 가장 큰 차이
>
> - 프로세서나 엔진이 바로 실행가능하냐(executable) 아니냐

<br>

그렇다면 뭐가 다른가?

- 수행 시점
- 수행 방식
- 수행 횟수
- 수행 결과물
- 코드 실행 속도

![컴파일러와 인터프리터](https://mblogthumb-phinf.pstatic.net/MjAxODAzMTNfMzEg/MDAxNTIwOTMyMjgxNTYx.31JjAtxFs6-zCTs8M-XUKo_Lvsm1PsxFZ1MPQTWVmosg.rXo2xTreC5YsfBDjcMaVQC_-5oyoCtwzpIrz0yOzSV0g.JPEG.ehcibear314/Compilervrsinterpreter.JPG?type=w800)

<br>

## 컴파일러

컴파일이란 무엇인가?

컴파일이 바로 코드를 변환하는 과정

컴파일러는 프로그램을 실행하기 전(Run-time 이전)에 전체 소스코드를 보고 명령어를 수집, 재구성하여, 컴퓨터가 실행 할 수 있도록 바로 기계어로 변환.

여기서 원래의 소스코드를 원시코드라고 하고,

컴파일된 코드는 목적(Object Code)코드라고 함.

<br>

일반적으로, 전체 소스코드를 보기 때문에 초기 구동시간이 긺, 이후 코드들에 대한 실행시간은 인터프리터에 비해 빠르다. (하나의 패키지로 매우 빠르게 작동)

구동시 코드와 함께 시스템으로부터 메모리 할당

실행파일을 별도로 생성한다.

다만, OS 및 빌드 환경에 종속적이어서, OS환경에 맞게 호환되는 라이브러리와 빌드환경을 구분하여 구축해 줘야함.

> ⇒ 실행파일이 생성되는데, 실행파일은 런타임 이전에 빌드되잖아. 그래서 OS에 종속적임. 어떤 OS에서 구동될지 알 수 없으니까

ex) C, C++, Java(Byte Code로 변환하는 과정에서)

<br>

## 인터프리터

인터프리터는 high-level languag를 중간 코드(intermediate code)로 변환하고

이를 런타임 이후에 Row(line by line)단위로 해석하여 프로그램을 구동.

<br>

런타임에 즉시 해석하기 때문에, 패키지 형태로 Binary파일을 뽑아 낼 수 있는 Complie방식에 비해 낮은 퍼포먼스를 보임

런타임에 코드를 구동시키기 때문에, 실제 실행시간은 느림.

대신 런타임에 실시간 Debugging 및 코드 수정이 가능.

<br>

line by line으로 실행하다가 도중에 에러가 보고 되면 이후 작성된 코드는 살펴보지 않음. 이는 보안적 관점에서 도움이 됨

메모리를 별도로 할당받지 않고, 필요할 때 할당하여 사용.

코드의 흐름 자체도 실제 필요할 때, 실제 수행되어야 하는 시점에 수행됨.

따라서 덕타이핑이 가능한 측면이 있으나, 정적 분석이 되지 않는 TradeOff를 가지고 있음

<br>

실행파일을 생성하지 않음

ex) js와 같은 스크립트언어, 컴파일 이후의 동작에서 interpreting을 수행하는 언어들도 많이 있음

<br>

참고: [컴파일러와 인터프리터의 차이 - 얏구 블로그](<[https://m.blog.naver.com/ehcibear314/221228200531](https://m.blog.naver.com/ehcibear314/221228200531)>)
