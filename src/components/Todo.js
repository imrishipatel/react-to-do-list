import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  //Events
  const deleteHandler = () => {
    //filter method returns a filtered array which DOES
    //NOT have a matching todo id with that of selected id
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
