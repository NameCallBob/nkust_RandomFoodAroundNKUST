import React, { useState } from "react";
import Axios from "axios";

export default function App() {
  const [list, setList] = useState([]);

  const getList = () => {
    Axios.get("http://localhost:3001/list").then((response) => {
      setList(response.data);
    });
  };

  const getRandom = () => {
    Axios.get("http://localhost:3001/random").then((response) => {
      setList(response.data);
    });
  };

  return (
    <div className="App">
      <div>
        <button onClick={getList}>Show restaurant list</button>
        <button onClick={getRandom}>隨機選一</button>

        {list.map((val, key) => {
          return (
            <div key={key}>
              <h3>Name: {val.name}</h3>
              <h3>area: {val.area}</h3>
              <h3>type: {val.type}</h3>
              <h3>address: {val.address}</h3>
              <h3>phone: {val.phone}</h3>
              <h3>star: {val.star}</h3>
              <h3>remark: {val.remark}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
