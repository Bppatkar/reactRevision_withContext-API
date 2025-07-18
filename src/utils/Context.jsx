import React, { createContext } from "react";

export const StoreContext = createContext();

const Context = (props) => {
  return (
    <StoreContext.Provider value={{}}>{props.children}</StoreContext.Provider>
  );
};

export default Context;
