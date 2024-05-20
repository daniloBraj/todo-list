import React, { useState } from "react";
import Form from "./Components/Form";
import Task from "./Components/Task"; 
import { AnimatePresence } from "framer-motion";
import './main.css';

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
      if (idx === index) { // Toggle the 'completed' status of the task and return the updated task
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
      <h3>CROSS OUT TASKS BY CLICKING ON THEM</h3>
      <Form
        handleSubmit={handleSubmit}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
      />
      <AnimatePresence>
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            index={index}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default App;
