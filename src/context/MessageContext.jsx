import React, { createContext, useContext, useState } from "react";

// 建立 context
const MessageContext = createContext(null);

// Provider：集中提供 state 與更新函式
export function MessageProvider({ children }) {
  const [message, setMessage] = useState("Initial message from context");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

// 封裝 useContext
export function useMessage() {
  const context = useContext(MessageContext);
  if (context === null) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  // debugger
  return context;
}
