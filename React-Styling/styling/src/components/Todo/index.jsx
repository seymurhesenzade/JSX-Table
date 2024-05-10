import React from "react";

function Todo({todo, onRemoveTodo}) {
    const {id,content} = todo;
    const removeTodo = () => {
        onRemoveTodo(id);
    }
  return (
    <div
      style={{
        width: "275px",
       height: "10px",
       borderRadius: "5px",
        color: "Blue",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid blue",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <div>{content}</div>
      <div>
       <button style={{width:"80px", height:"40px", backgroundColor:"blue", margin:"1px"}} onClick={removeTodo}>Delete</button>

      </div>
    </div>
  );
}

export default Todo;


