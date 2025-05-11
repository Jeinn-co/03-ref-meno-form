import { useState, useMemo } from "react";

function DemoUseMemo() {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(0); // 讓畫面 re-render，但不影響 count

  // 模擬一個很慢的同步運算
  function slowAdd(a, b) {
    console.log("⚠️ 正在執行 slowAdd 計算...");
    let total = 0;
    for (let i = 0; i < 1e2; i++) { // demo 1e9 十億，總共有 9 個零
      total += i;
    }
    console.log("done");
    return a + b;
  }

  // const result = slowAdd(count, 1);
  const result = useMemo(() => slowAdd(count, 1), [count]);
  console.log(result)

  return (
    <div className="contain">
      <h3>useMemo Demo</h3>
      <p>計算結果：{result}</p>
      <button onClick={() => setCount((c) => c + 1)}>count加一</button>
      <button onClick={() => setTrigger((t) => t + 1)}>動到別的值。</button>
    </div>
  );
}

export default DemoUseMemo;
