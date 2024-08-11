import React from "react";
import "../styles/styles.css";

const InputField = (props) => {
  return (
    <div>
      <input
        className="s-text-black"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(event) => props.parent_function(event.target.value)}
        style={{
          border: "2px solid gray",
          borderRadius: "5px",
          padding: "10px",
          outline: "none",
          maxwidth:'300px'

        }}
      />
    </div>
  );
};

export default InputField;