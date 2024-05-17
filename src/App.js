import React, { useState } from "react";
import Form from "./Components/Form";
import Task from "./Components/Task";
import "./main.css"

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskInput("");
    setTasks([...tasks, { task: taskInput, completed: false }]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <Form
        handleSubmit={handleSubmit}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
      />
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          index={index}
          onDelete={handleDelete}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default App;
