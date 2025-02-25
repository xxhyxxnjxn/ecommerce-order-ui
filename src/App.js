import logo from './logo.svg';
import './App.css';

function App() {
  let div = 'black-nav';
  let post = '블로그 글 제목';

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
      <h4>{post}</h4>
    </div>
  );
}

export default App;
