const Form = ({
    handleSubmit,
    taskInput,
    setTaskInput,
    task,
    
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter a task you need to do today:
          <input 
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
  }
  
  export default Form;