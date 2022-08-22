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
        <input type="checkbox" checked={todo.checked} />
        {todo.checked ? (
          <span style={{ textDecoration: "line-through" }}>{todo.todo}</span>
        ) : (
          <span>{todo.todo}</span>
        )}
        <button onClick={todos.remove}>삭제하기</button>
      </div>
    ))}
  </div>
));

export default Todo;
