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
    console.log(todo);
  };

  // toggle = (id) => {
  //   this.todos = this.todos.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         checked: !todo.checked,
  //       };
  //     }
  //     console.log(todo.checked);
  //   });
  // };

  remove = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export default ToDoStore;
