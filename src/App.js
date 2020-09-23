/*jshint esversion: 10 */

import React from "react";
import "./App.css";
import TodoList from "./components/todo-list/todo-list.component";

function App() {
  return (
    <>
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
