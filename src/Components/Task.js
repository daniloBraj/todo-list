import React from "react";
import { motion } from "framer-motion";
import './style.css';

const Task = ({ task, index, onDelete, onToggleComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3
        onClick={() => onToggleComplete(index)}
        className={`line-through-animation ${task.completed ? 'line-through-complete' : ''}`}
        style={{ cursor: "pointer" }}
      >
        • {task.task}
      </h3>
      <button onClick={() => onDelete(index)}>Delete</button>
    </motion.div>
  );
};

export default Task;
