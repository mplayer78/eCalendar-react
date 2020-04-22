import React from "react";

function CloseButton(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 217 217">
      <circle
        cx="108.5"
        cy="108.5"
        r="98.5"
        stroke={props.color || "#C4C4C4"}
        strokeWidth="20"
      ></circle>
      <path
        fill={props.color || "#C4C4C4"}
        d="M56 145.803H183V165.803H56z"
        transform="rotate(-45 56 145.803)"
      ></path>
      <path
        fill={props.color || "#C4C4C4"}
        d="M70.142 56H197.142V76H70.142z"
        transform="rotate(45 70.142 56)"
      ></path>
    </svg>
  );
}

export default CloseButton;
