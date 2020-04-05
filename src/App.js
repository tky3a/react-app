import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 複数コンポーネントを使った方法

// App classのコンポーネントを定義して、
// その中でRect classのコンポーネントを呼び出し(実行している)
class App extends Component{
  render(){
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan"/>
      <Rect x="150" y="100" w="150" h="150" c="magenta" />
      <Rect x="100" y="150" w="150" h="150" c="black" />
    </div>;
  }
}

class Rect extends Component{
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  color = 0;
  style = {};

  constructor(props){
    super(props);
    this.x = props.x;
    this.y = props.y;
    this.width = props.w;
    this.height = props.h;
    this.color = props.c;
    this.style = {
      backgroundColor: this.color,
      position: "absolute",
      left: this.x + "px",
      top: this.y + "px",
      width: this.width + "px",
      height: this.height + "px",
    }
  }

  render(){
    return <div style={this.style}></div>;
  }
}
export default App;
