import React, { useState } from 'react';
import { FaTrashAlt, FaCheckCircle, FaCircle } from 'react-icons/fa';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-3 rounded-l-lg border-none focus:outline-none text-gray-900"
          />
          <button
            onClick={addTask}
            className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-200"
          >
            Add
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow-md ${
                task.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              <div className="flex items-center">
                {task.completed ? (
                  <FaCheckCircle
                    onClick={() => toggleCompletion(index)}
                    className="text-green-500 cursor-pointer"
                  />
                ) : (
                  <FaCircle
                    onClick={() => toggleCompletion(index)}
                    className="text-gray-400 cursor-pointer"
                  />
                )}
                <span className="ml-4">{task.text}</span>
              </div>
              <FaTrashAlt
                onClick={() => removeTask(index)}
                className="text-red-500 cursor-pointer hover:text-red-600 transition duration-200"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;