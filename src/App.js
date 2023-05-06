import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoData, setTodoData] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = [...todoData, { title: todo, status: false }];
    setTodo("");
    setTodoData(newData);
  };

  const handleChecked = (id) => {
    setTodoData(
      todoData.filter((item, index) => {
        if (index === id) {
          item.status = !item.status;
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setTodoData(
      todoData.filter((item, index) => {
        if (index === id) {
          return;
        }
        return item;
      })
    );
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <form onSubmit={handleSubmit} action="#">
        <div className="input">
          <input
            type="text"
            placeholder="🖊️ Add item..."
            value={todo}
            onChange={handleInputChange}
          />
          <i className="fas fa-plus" onClick={handleSubmit}></i>
        </div>
      </form>
      <div className="todos">
        {todoData.map((item, index) => {
          if (!item.status) {
            return (
              <TodoList
                title={item.title}
                status={item.status}
                key={index}
                update={handleChecked}
                delete={handleDelete}
                id={index}
              />
            );
          }
        })}
      </div>
      <div className="todos" style={{ marginTop: "30px" }}>
        <h3 style={{ color: "white" }}>Completed</h3>
        {todoData.map((item, index) => {
          if (item.status) {
            return (
              <TodoList
                title={item.title}
                status={item.status}
                key={index}
                update={handleChecked}
                delete={handleDelete}
                id={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
