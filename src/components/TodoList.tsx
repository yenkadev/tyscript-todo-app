import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../constants";

interface TodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const dataTest = {
  id: "232323",
  todoItem: "sdsdsd",
  isDone: true,
};

const TodoList: React.FC<TodoListProps> = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList?.map((todoItem, index) => (
        <TodoItem key={index} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
