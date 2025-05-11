import React, { useRef, useEffect, useState } from "react";

const RefPreValue = () => {
  const prevVal = useRef(0);
  const [count, setCount] = useState(0);
  // console.log(prevVal)
  const handleAddClick = () => {
    setCount((prev) => {
      prevVal.current = prev;
      return prev + 3;
    });
    // console.log("test", prevVal.current);
  };

  // useEffect(() => {
  //   console.log("test2", prevVal.current);
  // }, [prevVal.current]);

  return (
    <div style={{ width: 400 }}>
      <h3>RefPreValue</h3>
      <section>
        <p> current value: {count}</p>
        <p> previous value: {prevVal.current}</p>
        <button onClick={handleAddClick}>update value</button>
      </section>
    </div>
  );
};

export default RefPreValue;
