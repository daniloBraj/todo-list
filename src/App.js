import { useState } from "react";
import Form from "./Form";
import Task from "./Task";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [task, setTask] = useState([]);

  const handleClick = (index) => {
    let storedTask = [...task];
    storedTask.splice(index, 1);
    setTask(storedTask);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskInput("");
    setTask([...task, {task: taskInput}])
  };

  const Task = (props) => {
    return(
        <div>
            <h3>• {props.task}</h3>
            <button onClick={props.handleClick}>Remove</button>
        </div>
    )
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <Form
        handleSubmit={handleSubmit}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
      />
      {task.map((task, index) => {
        return (
          <Task
            task={task.task}
            key={index}
            handleClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

//


export default App;
