import React from "react";
import "./App.css";
import InputField from "./components/InputField";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Taskify</h1>
      <InputField
        todo="test"
        setTodo={(e) => {
          console.log("setTodo", e);
        }}
        handleAddTask={(e) => {
          console.log("handleAddTask", e);
        }}
      />
    </div>
  );
}

export default App;
