import React, { useState } from "react";
import { observer } from "mobx-react";

const TodoInsert = observer(({ todos }) => {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    todos.create(todo);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={todo}
        onChange={onChange}
      />
      <button type="submit">추가하기</button>
    </form>
  );
});

export default TodoInsert;
