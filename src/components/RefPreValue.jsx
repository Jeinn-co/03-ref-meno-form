import React, { useRef, useEffect, useState } from "react";

const RefPreValue = () => {
  // const prevVal = useRef(0);
  let prevVal = 0  // 因為畫面重畫，重置 value.
  const [count, setCount] = useState(0);
  // console.log(prevVal)
  const handleAddClick = () => {
    setCount((prev) => {
      prevVal = prev;
      return prev + 3;
    });
    // console.log("test", prevVal);
  };

  // useEffect(() => {
  //   console.log("test2", prevVal);
  // }, [prevVal]);

  return (
    <div style={{ width: 400 }}>
      <h3>RefPreValue</h3>
      <section>
        <p> current value: {count}</p>
        <p> previous value: {prevVal}</p>
        <button onClick={handleAddClick}>update value</button>
      </section>
    </div>
  );
};

export default RefPreValue;
