import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { Todo } from "../constants";
import TodoList from "./TodoList";

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

  const handleEditTodo = (id: number) => {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === id
          ? {
              ...todoItem,
              todo: isEditValue,
            }
          : todoItem
      )
    );
  };

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

  console.log("todoList", todoList);

  useEffect(() => inpuRef.current?.focus(), [isEdit]);

  console.log("isEdit", isEdit);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEditTodo(todoItem.id);
      }}
    >
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
        // Check isDone to add style here
        <p>{todoItem?.todo}</p>
      )}
      <ul>
        <li>
          <Icon
            icon="pencil"
            size={20}
            color="orange"
            onClick={() => {
              setEdit(!isEdit);
            }}
          />
          <Icon
            icon="bin"
            size={20}
            color="orange"
            onClick={() => handleDeleteTodo(todoItem?.id)}
          />
          <Icon
            icon="checkmark"
            size={20}
            color="orange"
            onClick={() => handleDoneTodo(todoItem?.id)}
          />
        </li>
      </ul>
    </form>
  );
};

export default TodoItem;
