import React, { forwardRef } from "react";

const RefChangeColor = forwardRef((props, ref) => {
  console.log("test", props);
  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "yellow",
        padding: 30,
      }}
    >
      RefChangeColor
    </div>
  );
});

export default RefChangeColor;
