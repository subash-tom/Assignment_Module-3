import React, { useState } from "react";
import "./KanbanStyle.css";

function Kanban() {
  const [todo, setTodo] = useState(["Learn React", "Practice Java"]);
  const [progress, setProgress] = useState(["Build Project"]);
  const [completed, setCompleted] = useState(["Install VS Code"]);

  function addTask(list, setList) {
    let task = prompt("Enter Task Name");

    if (task) {
      setList([...list, task]);
    }
  }

  function editTask(list, setList, index) {
    let task = prompt("Enter New Task Name");

    if (task) {
      let updated = [...list];
      updated[index] = task;
      setList(updated);
    }
  }

  function deleteTask(list, setList, index) {
    setList(list.filter((task, i) => i !== index));
  }

  function showTasks(list, setList) {
    return (
      <>
        {list.map((task, index) => (
          <div className="task" key={index}>
            <p>{task}</p>

            <button onClick={() => editTask(list, setList, index)}>Edit</button>

            <button onClick={() => deleteTask(list, setList, index)}>
              Delete
            </button>
          </div>
        ))}

        <button onClick={() => addTask(list, setList)}>Add Task</button>
      </>
    );
  }

  return (
    <div className="dashboard">
      <h1>Kanban Dashboard</h1>

      <div className="board">
        <div className="column">
          <h2>To Do</h2>
          {showTasks(todo, setTodo)}
        </div>

        <div className="column">
          <h2>In Progress</h2>
          {showTasks(progress, setProgress)}
        </div>

        <div className="column">
          <h2>Completed</h2>
          {showTasks(completed, setCompleted)}
        </div>
      </div>
    </div>
  );
}

export default Kanban;
