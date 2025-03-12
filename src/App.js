/* eslint-disable */ //warning message 없애는 주석

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let div = 'black-nav';
  let post = '블로그 글 제목'; //let, var, const 자료형 써도 되고
  
  //2025-03-12 리액트 3강
  // 자료 잠깐 저장할 때 state 써도 가능하다.
  // 1. import {useState}
  // 2. useState(보관할 자료)
  // 3. let [작명, 작명] -> Destructuring 문법
  // b = state 변경 도와주는 함수
  // Q. 왜 state를 써야할까 ?
  // A. state는 변경되면 state 쓰던 html은 자동 재렌더링 된다. 따라서 변동시 자동으로 html에 반영되게 만들고 싶으면 state쓰면 된다. 로고 같은거는 굳이 ? state로 안만들어도 됨 쓸데없음 / 자주 바뀔 것 같은건 state로 바꾸면 됨
  let [postTitle,setPostTitle] = useState(['남자 코트','여자 코트','악세사리']);
  let [likeNum, changedLikeNum] = useState(0); // 두번째 변수는 이제 변경용 함수임 이걸 써야 html에 변경도 잘된다.

  function plusLikeNum() {
    //state를 변경할 때는 등호를 사요하면 안되고 이렇게 변경함수를 사용해서 값을 변경해야한다.
    changedLikeNum(likeNum++);
  }

  function changePostTitleName() {
    //let copyPostTitle = postTitle; 이렇게 하면 메모리 참조로 원본 배열도 같이 복사가 되면서 변수가 같아진다 그래서 값을 바꾸면 원본 배열도 값이 바뀌게 되면서 true가 나오는데 true가 나오면 변수 값이 바뀌지 않음 !
    let copyPostTitle = [...postTitle]; // 새로운 배열로 저장 (얕은 복사)
    copyPostTitle[0] = '여자 코트';
    setPostTitle(copyPostTitle)
  }

  return (
    <div className="App"> 
    {/**
     * html이 아니라 jsx이다.
     * .js 파일에서 쓰는 html 대용품
     */}
      <div className ={div}>
        {/**
         * JSX 문법 1.
         * class 넣을 땐 className으로 사용한다.
         */}
        <h4 style={ {color: 'red', fontSize: '16px'} }>Blog</h4>
        {/**
         * JSX 문법 3.
         * style 넣을 땐 style = { {스타일명 : '값'} }
         */}
      </div>
      {/**
       * JSX 문법 2.
       * 변수 넣을 땐(데이터 바인딩) {중괄호}
       */}
      { /**
       * <h4>{post}</h4>
       */
      }
      {
        /**
         * 2025-03-12 리액트 3강
         * return() 안에는 병렬로 태그 2개 이상 기입 금지
         * <div className="App"> 
         * </div>
         * <div>
         * </div> 이렇게 작성 금지
         */
      }
      <div className="list">
        {
          /**
           * onClick = {} 안엔 함수 이름을 넣어야함
           */
        }
        <h4>{ postTitle[0] } 
          <span onClick={plusLikeNum}>👍</span> {likeNum} 
          {
            /**
             * <span onClick={() => {console.log(1)} }>👍</span> {따봉} 
             */
          }
        </h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4>{ postTitle[1] }</h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4>{ postTitle[2] }</h4>
        <p>2월 17일 발행 </p>
      </div>
      <button onClick={changePostTitleName}>첫 번째 글자 변경</button>
    </div>
  );
}

export default App;
