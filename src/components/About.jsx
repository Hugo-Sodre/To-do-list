import React, { useState } from 'react';

export default function About() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div>
        <div className="border-dashed border-2 flex flex-col gap-6 p-8">
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              className="border-solid border-4"
              placeholder="Digite uma tarefa"
              value={task}
              onChange={handleInputChange}
            />
          </form>
          <div className="border-solid border-4 flex flex-col">
            <button onClick={handleAddTask}>Adicionar</button>
          </div>
          <div className="border-solid border-4 flex flex-col">
            <button onClick={handleRemoveTask}>Remover</button>
          </div>
        </div>
      </div>
    </div>
  );
}
