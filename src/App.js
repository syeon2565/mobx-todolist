import Todo from "./Todo";
import ToDoStore from "./stores/ToDoStore";

const myTodo = new ToDoStore();

function App() {
  return <Todo todos={myTodo} />;
}

export default App;
