import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../constants";
import classes from "./../scss/main.module.scss";

interface TodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, setTodoList }) => {
  return (
    <ul className={classes.listTodo}>
      {todoList?.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoItem={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </ul>
  );
};

export default TodoList;
