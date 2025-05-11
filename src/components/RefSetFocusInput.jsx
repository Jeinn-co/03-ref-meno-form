import React, { useEffect, useRef } from "react";
// import './RefSetFocusInput.css'
import './RefSetFocusInput.scss'

const RefSetFocusInput = () => {
  const refInput = useRef(null);

  useEffect(() => {
    if (refInput.current) {
      // refInput.current.focus();
    }
  }, []);

  return (
    <>
      <div>RefSetFocusInput</div>
      <input type="text" name="first name" value="John" ref={refInput} />
      <input type="text" name="last name" value="wake" ref={refInput} />
      <input type="text" name="age" value="23" ref={refInput} />
    </>
  );
};

export default RefSetFocusInput;
