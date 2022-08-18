import React from "react";
import { observer } from "mobx-react";
import TodoTemplate from "./components/TodoTemplate";

const Todo = observer(({ todos }) => (
  <div>
    <TodoTemplate>
      {todos.todos.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </TodoTemplate>
  </div>
));

export default Todo;
