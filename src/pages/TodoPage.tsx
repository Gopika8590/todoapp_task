import { useState } from 'react';
import plus from '../assets/plus.png';
import cross from '../assets/cross.png';
function TodoPage() {
  const [todos, setTodos] = useState<{ id: number; text: string; status: boolean }[]>([]);
  const [todo, setTodo] = useState<string>('');


  const handleAddToDo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo('');
    }
  };

  const handleDeleteTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div className="todo-page">
      <div className="todo-header">
      
        <h1>TODO</h1>
        <div className="input">
        <img src={plus} onClick={handleAddToDo} className='add-icon' />
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder=" Add item..."
          />
          
        </div>
      </div>
      <div className="todos">
        {todos.map((todoItem) => (
          <div key={todoItem.id} className="todo-item">
            <div className="left">
            <input
              onChange={(e) => {
                setTodos(todos.map(item =>
                  item.id === todoItem.id ? { ...item, status: e.target.checked } : item
                ));
              }}
              checked={todoItem.status}
              type="checkbox"
            />
            <p>{todoItem.text}</p>
            </div>
            <div className="right">
              <img src={cross} onClick={() => handleDeleteTodo(todoItem.id)} className='delete-icon'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoPage;



{/*
import React from 'react';

const TodoList = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task: any) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
  };

  return (
    <div>
      {tasks.map((task: any) => (
        <div key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;*/}
