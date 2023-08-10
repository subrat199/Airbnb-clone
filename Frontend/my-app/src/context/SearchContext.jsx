import { createContext, useState } from "react";

export const context = createContext();

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [isAuth,setisAuth]=useState(false);
  return (
    <context.Provider value={{ search, setSearch,isAuth,setisAuth }}>
      {children}
    </context.Provider>
  );
};

export default SearchContextProvider;
