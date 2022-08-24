import { makeAutoObservable } from "mobx";

class ToDoStore {
  todos = [
    { id: 1, todo: "리액트", checked: false },
    { id: 2, todo: "mobx", checked: true },
  ];
  nextId = 3;
  constructor() {
    makeAutoObservable(this);
  }

  create = (todo) => {
    this.todos.push({ todo: todo, id: this.nextId++, checked: false });
  };

  toggle = (id) => {
    this.todos.map((todo) => {
      if (id === todo.id) todo.checked = !todo.checked;
    });
  };

  remove = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export default ToDoStore;
