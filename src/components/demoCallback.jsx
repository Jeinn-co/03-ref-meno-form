import { useState, useRef, useEffect, useCallback } from "react";

const DemoCallback = () => {
  const [count, setCount] = useState(0);
  const prevRef = useRef();

  const funcAdd = (a, b) => a + b;
  // const funcAdd = useCallback((a, b) => a + b, []);
  useEffect(() => {
    const isSame = prevRef.current === funcAdd;
    console.log("funcAdd reference changed?", !isSame);
    prevRef.current = funcAdd;
  });

  return (
    <div className="contain">
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Re-render</button>
    </div>
  );
};

export default DemoCallback;
