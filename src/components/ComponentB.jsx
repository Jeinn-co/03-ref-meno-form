import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB({ text }) {
  return (
    <div style={{ paddingLeft: 20, backgroundColor: 'pink' }}>
      <h3>ComponentB (2 Level)</h3>
      <ComponentC text={text} />
    </div>
  );
}
