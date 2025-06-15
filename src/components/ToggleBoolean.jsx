import React from 'react';
import useToggleBoolean from '../hooks/toggleBoolean';

const buttonStyle = {
  width: 120,
  padding: 10,
  borderRadius: 10,
};

const ToggleBoolean = () => {
  const [isOpen, toggleOpen] = useToggleBoolean(true);
  const [isOpen2, toggleOpen2] = useToggleBoolean(false);

  return (
    <div>
      <h2>Toggle Panel</h2>
      <button onClick={toggleOpen} style={buttonStyle}>
        {isOpen ? 'Hide Panel 1' : 'Show Panel 1'}
      </button>
      <button onClick={toggleOpen2} style={buttonStyle}>
        {isOpen2 ? 'Hide Panel 2' : 'Show Panel 2'}
      </button>
      {isOpen && (
        <div
          style={{
            marginTop: 10,
            background: '#ff0',
            padding: 30,
            //   transition: "opacity 0.4s ease",
            //   opacity: isOpen ? 1 : 0,
          }}
        >
          This is a toggle panel.
        </div>
      )}
      {isOpen2 && (
        <div
          style={{
            marginTop: 10,
            background: '#0ff',
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
};

export default ToggleBoolean;
