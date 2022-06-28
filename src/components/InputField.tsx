import React from "react";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAddTask,
}) => {
  return (
    <form
      onSubmit={(e) => {
        handleAddTask(e);
        e.preventDefault();
      }}
    >
      <input
        type="input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter a task"
      />
      <button type="submit">Enter</button>
    </form>
  );
};

export default InputField;
