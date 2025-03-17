# ecommerce-order-ui

node_modules : 라이브러리 코드 보관함

public : static 파일 모아놓는 곳 (이미지 파일 등등)

src : 코드 짜는 곳

    APP.js : 메인 페이지 -> index.html 집어넣어줌

package.json : 프로젝트 정보

# 실행 순서
1. npm install
2. node_modules 생성됐는지 확인
3. npm start

# 컴포넌트 만드는 법
1. function 만들고
2. return() 안에 html 담기
3. <함수명></함수명> 쓰기

어떤 걸 컴포넌트로 만들면 좋은가 ?

1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주 변경되는 것들

단점 : state를 쓸 때 문제가 생김
