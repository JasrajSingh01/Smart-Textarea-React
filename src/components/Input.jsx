import React, { useState } from "react";

function Input(props) {
 
  let [count, setCount] = useState("");
  let [input, setInput] = useState("");

  const inputHandler = (e) => {
    if (count <=149) {
      setInput(e.target.value);
      setCount(e.target.value.length);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    props.tweets(input); 
    setInput('');
    setCount('');
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <textarea className="todo-input" value={input} type="text" placeholder="Write something..." cols="30" rows="8" name="text" onChange={inputHandler} />
        <p>{count} / 150</p>
        <button className="todo-btn">Add Tweet</button>
      </form>
    </div>
  );
}

export default Input;
