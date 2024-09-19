// Todoitems.js
import React from 'react';
import './CSS/Todoitems.css';
import tick from "./Assets/tick.png";
import cross from "./Assets/cross.png";
import not_tick from "./Assets/not_tick.png";

const Todoitems = ({ no, display, text, setTodos }) => {

  // Deletes the todo by filtering it out based on its `no`
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos")); 
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  // Toggles the todo's display status (line-through or normal)
  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.map(todo => {
      if (todo.no === no) {
        todo.display = todo.display === "" ? "line-through" : "";
      }
      return todo;
    });
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={toggle}>
        {display === "" ? <img src={not_tick} alt="Incomplete" /> : <img src={tick} alt="Complete" />}
        <div className={`todoitems-text ${display}`}>{text}</div>
      </div>
      <img src={cross} alt="Delete" className="todoitems-crossicon" onClick={() => deleteTodo(no)} />
    </div>
  );
};

export default Todoitems;
