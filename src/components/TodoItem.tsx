import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { Todo } from "../constants";
import classes from "./../scss/main.module.scss";

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
  const [isEdit, setEdit] = useState<boolean>(false);
  const [isEditValue, setEditValue] = useState<string>(todoItem.todo);

  const inpuRef = useRef<HTMLInputElement>(null);

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  const handleDoneTodo = (id: number) => {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === id
          ? {
              ...todoItem,
              isDone: !todoItem.isDone,
            }
          : todoItem
      )
    );
  };

  useEffect(() => inpuRef.current?.focus(), [isEdit]);

  return (
    <li className={classes.listTodoItem}>
      {isEdit ? (
        <input
          type="text"
          value={isEditValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
          ref={inpuRef}
        />
      ) : (
        <p>{todoItem?.todo}</p>
      )}
      <div className={classes.dFlex}>
        <Icon
          icon="pencil"
          size={18}
          onClick={() => {
            setEdit(!isEdit);
          }}
        />
        <Icon
          icon="bin"
          size={18}
          onClick={() => handleDeleteTodo(todoItem?.id)}
        />
        <Icon
          icon="checkmark"
          size={18}
          onClick={() => handleDoneTodo(todoItem?.id)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
