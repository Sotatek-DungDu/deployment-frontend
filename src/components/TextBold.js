import React from "react";

export default function TextBold(props) {
  return (
    <h3
      style={{
        color: "cyan",
      }}
    >
      {props.text}
    </h3>
  );
}
