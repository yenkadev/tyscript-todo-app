import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./constants";
import classes from "./scss/main.module.scss";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1
          className={classes.title}
          style={{
            color: "white",
            margin: "48px 0",
          }}
        >
          Taskify
        </h1>

        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        />

        <div className={classes.row} style={{ marginTop: "16px" }}>
          <div className={classes.col}>
            <div className={classes.boxActive}>
              <h3 className={classes.title}>Actives Tasks</h3>
              <TodoList todoList={todoList} setTodoList={setTodoList} />
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.boxComplete}>
              <h3 className={classes.title}>Completed Tasks</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
