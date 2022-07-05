import React from "react";
import classes from "./../scss/main.module.scss";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAddTodo,
}) => {
  return (
    <form
      onSubmit={(e) => {
        handleAddTodo();
        e.preventDefault();
      }}
      className={classes.formGroup}
    >
      <input
        type="input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter a task"
        className={classes.formControl}
      />
      <button type="submit">Enter</button>
    </form>
  );
};

export default InputField;
