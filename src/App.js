import './App.css';
import TodoList from "./component/TodoList";
import React from "react";
import RightClick from "./detail/RightClick";

function App() {


  return (
    <div className="App">
      <h1 className="header-title">Taskoo</h1>
        <TodoList/>
    </div>
  );
}

export default App;
