import React, { useState } from 'react';

const options = [
  { id: 1, label: '燕巢', value: '燕巢' },
  { id: 2, label: '楠梓', value: '楠梓' },
  { id: 3, label: '建工', value: '建工' },
  { id: 4, label: '第一', value: '第一' },
];

export default function AreaSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [list, setList] = useState([]);

  const handleOptionChange = (optionValue) => {
    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(selectedOptions.filter((value) => value !== optionValue));
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  const handleButtonClick = () => {
    let params = {
      'way1':'s_area',
      'params' :selectedOptions[0]
    }
    // 使用fetch函式向後端傳送Post請求
    fetch('http://localhost:3001/api/search/', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    })

      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setList(data);
        } else {
          setList([data]);
        }
      })
      .catch((error) => {
        // 處理錯誤
        console.log(error);
      });
  };

  const typeRandom = () => {
    // 使用fetch函式向後端傳送Post請求
    fetch('http://localhost:3001/api/area/random', {
      method: 'POST',
      body: JSON.stringify(selectedOptions),
      headers: {
        'Content-Type': 'application/json',
      },
    })

      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setList(data);
        } else {
          setList([data]);
        }
      })
      .catch((error) => {
        // 處理錯誤
        console.log(error);
      });
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleOptionChange(option.value)}
          />
          {option.label}
        </label>
      ))}
      <br/>
      <button onClick={handleButtonClick}>搜尋</button>
      <button onClick={typeRandom}>選項內隨機選一</button>
      {list.map((val,key) => (
        <div key={val.id}>
          <div>
            <h3>Name: {val.name}</h3>
            <h3>area: {val.area}</h3>
            <h3>type: {val.type}</h3>
            <h3>address: {val.address}</h3>
            <h3>phone: {val.phone}</h3>
            <h3>star: {val.star}</h3>
            <h3>remark: {val.remark}</h3>
          </div>
        </div>
      ))}

    </div>
  );
}
