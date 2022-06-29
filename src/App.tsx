import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./constants";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddTask = () => {
    if (todo) {
      console.log(todo);
      setTodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log("todoList", todoList);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
