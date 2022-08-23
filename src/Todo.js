import { observer } from "mobx-react";
import TodoInsert from "./components/TodoInsert";

const Todo = observer(({ todos }) => {
  return (
    <div>
      <h1>To Do</h1>
      <TodoInsert todos={todos} />
      {todos.todos.map((todo) => (
        <label key={todo.id}>
          <br />
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => {
              todos.toggle(todo.id);
            }}
          />
          {todo.checked ? (
            <span style={{ textDecoration: "line-through" }}>{todo.todo}</span>
          ) : (
            <span>{todo.todo}</span>
          )}
          <button
            onClick={() => {
              todos.remove(todo.id);
            }}
          >
            삭제하기
          </button>
        </label>
      ))}
    </div>
  );
});

export default Todo;
