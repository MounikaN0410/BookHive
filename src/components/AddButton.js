import React from "react";
import "../styles/styles.css";

const AddButton = (props) => {
  return (
    <button class="inline-block text-md px-4 py-2 leading-none border rounded bg-green-700 text-white lg:mt-0" onClick={props.clickHandler}>
        {props.text}
    </button>
  );
};

export default AddButton;
