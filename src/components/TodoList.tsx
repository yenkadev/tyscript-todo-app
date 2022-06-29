import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../constants";

interface TodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList?.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoItem={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
