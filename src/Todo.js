import React from "react";
import { observer } from "mobx-react";

const Todo = observer(({ todos }) => (
  <div>
    <h1>To Do</h1>
    <form>
      <input placeholder="할 일을 입력하세요" />
      <button type="submit" onClick={todos.create}>
        추가하기
      </button>
    </form>
    {todos.todos.map((todo) => (
      <div key={todo.id}>
        {todo.todo}
        <button onClick={todos.remove}>삭제하기</button>
      </div>
    ))}
  </div>
));

export default Todo;
