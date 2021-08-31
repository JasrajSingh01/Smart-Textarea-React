import React from "react";

function Main(props) {

  return (
    <div className="task">
      <p>{props.task.name}</p>
      {/* <p>{props.task.}</p>  */}
      <button
          onClick={() => props.removeMain(props.task.id)}
          className='delete-btn'
        >
          Delete
        </button>
    </div>
  );
}

export default Main;
