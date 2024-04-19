//沒用到但先保留著看有沒有辦法不同檔案的function顯示在同一個地方，
//我目前沒弄成功...

import React, { useContext, useState } from "react";
import Axios from "axios";
import { ListContext } from "./ListContext";

export function Random() {
  const { setList } = useContext(ListContext);
  const [selected, setSelected] = useState([]);

  const getRandom = () => {
    Axios.get("http://localhost:3001/random").then((response) => {
      setList(response.data);
      setSelected(response.data);
    });
  };

  return (
    <div className="App">
      <div className="employees">
        <button onClick={getRandom}>隨機選一</button>

        {selected.length > 0 && (
          <div>
            <h3>Name: {selected[0].name}</h3>
            <h3>area: {selected[0].area}</h3>
            <h3>type: {selected[0].type}</h3>
            <h3>address: {selected[0].address}</h3>
            <h3>phone: {selected[0].phone}</h3>
            <h3>star: {selected[0].star}</h3>
            <h3>remark: {selected[0].remark}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
