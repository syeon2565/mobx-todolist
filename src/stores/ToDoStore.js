import { makeAutoObservable } from "mobx";

class ToDoStore {
  todos = [
    { id: 1, todo: "리액트", checked: false },
    { id: 2, todo: "mobx", checked: true },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // create = (todo) => {
  //   this.todos.push({ ...todo, id: (this.id += 1) });
  // };

  // toggle = (id) => {
  //   this.todos = this.todos.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         checked: !todo.checked,
  //       };
  //     }
  //   });
  // };

  // remove = (id) => {
  //   this.todos = this.todos.filter((todo) => todo.id !== id);
  // };
}

export default ToDoStore;
