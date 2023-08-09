import { createContext, useState } from "react";

export const context = createContext();

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <context.Provider value={{ search, setSearch }}>
      {children}
    </context.Provider>
  );
};

export default SearchContextProvider;
