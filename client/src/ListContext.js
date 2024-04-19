//沒用到但先保留著看有沒有辦法不同檔案的function顯示在同一個地方，
//好像是加這個檔案，但我目前沒弄成功...

import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
