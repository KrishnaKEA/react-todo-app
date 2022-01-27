import React, { useEffect, useState } from "react";
import Todoimage from "../images/todo.png";


// Getting data from local storage

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  
  // using useEffect 

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
// function to add item 
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  // function to delete item of index id
  const deleteMe = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <div className="main-div">
        <br />
        <h3>Todo app using react hooks(useState and useEffect)  plus- localStorage</h3>
        <hr />
        <div className="child-div">
          <figure>
            <img src={Todoimage} alt="todoimage" />
            <figcaption>Our List here</figcaption>
          </figure>
          <br />
          <div className="addItems">
            <input
              type="text"
              placeholder="write"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
          </div>
          <hr />

          <br />

          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem">
                  <li key={ind}>{elem} </li>{" "}
                  <button onClick={() => deleteMe(ind)}>delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
