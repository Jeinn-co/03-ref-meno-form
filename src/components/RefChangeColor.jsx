import React from "react";

const RefChangeColor = (props) => {
  const { ref } = props;

  console.log("test", props);
  return (
    <>
      <div
        ref={ref}
        style={{
          backgroundColor: "yellow",
          padding: 30,
        }}
      >
        RefChangeColor
      </div>
    </>
  );
};

export default RefChangeColor;
