import React, { useState } from "react";

function App() {

  let [task, setTask] = useState("");
  let [items, setItems] = useState([]);

  function eventHandler(event){
    let theEvent = event.target.value;
    setTask(theEvent)
  }

  function addItem(){
      setItems((prevItems)=>{
        return [...prevItems, task]
      })
      setTask("")
    }

  return (
  <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
    <div className="form">
        <input type="text" value={task} onChange={eventHandler}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
    </div>
      <div>
        <ul>
          {items.map((keys)=>{
           return <li>{keys}</li>
          })}
        </ul>
      </div>
  </div>
  );
}

export default App;
