import React, { useState } from "react";
import './Item.css'
const Items = (props) => {
  function checkInput() {
    console.log("Check");
    setTagList("");
  }

  const [tagList, setTagList] = useState([]);
  return (
    <div className="items">
      <div>
        {props.input}
        <input
          type="text"
          id="add"
          onChange={(event) => {
            setTagList(event.target.value);
          }}
          value={tagList}
        />
        <button className="btn-check" onClick={checkInput}>Check</button>
        <label>{tagList}</label>
      </div>
    </div>
  );
};

export default Items;
