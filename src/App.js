import React, { useState } from "react";
import Form from "./Form";
import "./main.css";

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

  const Task = ({ task, index, onDelete, onToggleComplete }) => {
    return (
      <div>
        <h3
          className={`task ${task.completed ? "completed" : ""}`}
          onClick={() => onToggleComplete(index)}
        >
          • {task.task}
        </h3>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <h3>CLICK ON TASK TO CROSS IT</h3>
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
