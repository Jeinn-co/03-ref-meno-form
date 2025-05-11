import React, { useState } from "react";

export default function TogglePanel() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <h2>Toggle Panel</h2>
      <button
        onClick={handleToggle}
        style={{
          width: 100,
          padding: 10,
          borderRadius: 10,
        }}
      >
        {isOpen ? "Hide Panel" : "Show Panel"}
      </button>
      {isOpen && (
        <div
          style={{
            marginTop: 10,
            background: "#ff0",
            padding: 30,
            //   transition: "opacity 0.4s ease",
            //   opacity: isOpen ? 1 : 0,
          }}
        >
          This is a toggle panel.
        </div>
      )}
    </div>
  );
}
