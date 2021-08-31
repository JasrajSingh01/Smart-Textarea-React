import React, { useState } from "react";
import Main from "./Main";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';

function List() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (taskName) => {

    const todoToBeAdded = {
      id: uuidv4(),
      name: taskName,
    }

    const newtweets = [todoToBeAdded, ...tweets]; 
    setTweets(newtweets);  
  };


  const removeMain = (id) => {
    const newArray = tweets.filter(todo => todo.id !== id); 
    setTweets(newArray); 
  };

  return (
    <div className="main">
      <h1>Smart Textarea</h1>
      <Input className="form" tweets={addTweet} />
      {tweets.map((todo) => (  
        <Main key={todo.id} task={todo} removeMain={removeMain} /> 
      ))}
    </div>
  );
}

export default List;
