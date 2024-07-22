// src/TodoList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

// The TodoList component displays a list of tasks and allows adding new tasks
const TodoList = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState(""); // State to store the new task input

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, text: newTask }]); // Add a new task to the list
    setNewTask(""); // Clear the input field
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // Update the new task input state
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.text}</Link>{" "}
            {/* Link to the task detail page */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
