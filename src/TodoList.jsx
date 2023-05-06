import React from "react";

function TodoList(props) {
  return props.status ? (
    <div className="todo">
      <div className="left">
        <input
          type="checkbox"
          checked={props.status}
          id={props.id}
          onChange={() => props.update(props.id)}
        />
        <p>
          <s>{props.title}</s>
        </p>
      </div>
      <div className="right">
        <i className="fas fa-times" onClick={() => props.delete(props.id)}></i>
      </div>
    </div>
  ) : (
    <div className="todo">
      <div className="left">
        <input
          type="checkbox"
          checked={props.status}
          id={props.id}
          onChange={() => props.update(props.id)}
        />
        <p>{props.title}</p>
      </div>
      <div className="right">
        <i className="fas fa-times" onClick={() => props.delete(props.id)}></i>
      </div>
    </div>
  );
}

export default TodoList;
