import React from "react";
import Icon from "./Icon";
import { Todo } from "../constants";

interface TodoItemProps {
  todoItem: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem,
  todoList,
  setTodoList,
}) => {
  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  console.log("todoList", todoList);

  return (
    <div>
      <p>{todoItem?.todo}</p>
      <ul>
        <li>
          <Icon icon="pencil" size={20} color="orange" />
          <Icon
            icon="bin"
            size={20}
            color="orange"
            onClick={() => handleDeleteTodo(todoItem?.id)}
          />
          <Icon icon="checkmark" size={20} color="orange" />
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
