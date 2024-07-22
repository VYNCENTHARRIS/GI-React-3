import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// The TaskDetail component displays and allows editing of a selected task
const TaskDetail = ({ tasks, setTasks }) => {
  const { id } = useParams(); // Get the task ID from the URL parameters
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === parseInt(id)); // Find the task by ID
  const [taskText, setTaskText] = useState(task.text); // State to store the task text

  const saveTask = () => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, text: taskText } : t))
    ); // Save the updated task text
    navigate("/"); // Navigate back to the task list
  };

  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id)); // Delete the task
    navigate("/"); // Navigate back to the task list
  };

  return (
    <div>
      <h1>Task Detail</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Update the task text state
      />
      <button onClick={saveTask}>Save Task</button>
      <button onClick={deleteTask}>Delete Task</button>
    </div>
  );
};

export default TaskDetail;
