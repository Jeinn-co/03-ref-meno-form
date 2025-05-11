import React, { useState } from "react";

const useToggleBoolean = (initial = false) => {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn((prev) => !prev);
  return [on, toggle];
};

export default useToggleBoolean;
