import React, { useReducer, useRef } from "react";
import '../App.css'

const initialState = [];


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        { val: action.payload, id: state.length, toggle: false },
      ];
    case "TOGGLE_ITEM":
      return state.map((item) =>
        item.id === action.payload ? { ...item, toggle: !item.toggle } : item
      );
    default:
      return state;
  }
};

function UseReducer() {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleKeyPress = (e) => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        dispatch({ type: "ADD_ITEM", payload: e.target.value });
        e.target.value = "";
      }
    }
  };

  const toggleItem = (index) => {
    dispatch({ type: "TOGGLE_ITEM", payload: index });
  };

  return (
    <>
     <div className="main">
     <input type="text" onKeyPress={(e) => handleKeyPress(e)} ref={inputRef} />
      {state.map((item) => (
        <div key={item.id} className="textAndButton">
          {item.toggle ? <h1>Hidden Content</h1> : <h1>{item.val}</h1>}
          <button  onClick={() => toggleItem(item.id)}>Toggle</button>
        </div>
      ))}

        <button className="scrollBtn" onClick={() => inputRef.current.focus()}>Get Back To Writing</button>
     </div>
    </>
  );
}

export default UseReducer;