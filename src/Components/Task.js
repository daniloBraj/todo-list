import React from "react";
import {motion} from "framer-motion";

const Task = ({ task, index, onDelete, onToggleComplete }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3
      onClick={() => onToggleComplete(index)}
      style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
    >
      • {task.task}
    </h3>
    <button onClick={() => onDelete(index)}>Delete</button>
  </motion.div>
);


export default Task;
