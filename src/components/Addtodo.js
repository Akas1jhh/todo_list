import React, { useState, useEffect } from "react";
import ShowTodo from "./Showtodo";

const getData = () => {
  let data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

function Addtodo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState(getData());

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);

    setTask("");
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col  p-2 my-3">
              <h4 className="text-center">Todo App Using React JS</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2 my-3">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={task}
                  onChange={onChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add todo
              </button>
            </div>
          </form>

          {data.map((value, index) => {
            return (
              <ShowTodo
                key={index}
                id={index}
                task={value}
                ondel={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
