import React from "react";

export default function ComponentC({ text }) {
  return (
    <div style={{ paddingLeft: 40, backgroundColor: 'lightgreen'}}>
      <h4>ComponentC (3 Level)</h4>
      <p>Received message: {text}</p>
    </div>
  );
}
