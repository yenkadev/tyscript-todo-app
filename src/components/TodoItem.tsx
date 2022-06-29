import React from "react";
import Icon from "./Icon";
import { Todo } from "../constants";

interface TodoItemProps {
  todoItem?: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todoItem }) => {
  return (
    <div>
      <p>{todoItem?.todo}</p>
      <ul>
        <li>
          <Icon icon="pencil" size={20} color="orange" />
          <Icon icon="bin" size={20} color="orange" />
          <Icon icon="checkmark" size={20} color="orange" />
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
