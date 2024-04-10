import React from "react";

export default function Button({ text, type, onClick, withIcon }) {
  return (
    <button type={type} onClick={onClick}>
      {withIcon ? <span>+</span> : null} <span>{text}</span>
    </button>
  );
}
