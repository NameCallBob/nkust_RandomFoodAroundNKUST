import React, { useState } from 'react';

const options = [
  { id: 1, label: '便利商店', value: '便利商店' },
  { id: 2, label: '便當', value: '便當' },
  { id: 3, label: '早餐', value: '早餐' },
  { id: 4, label: '早午餐', value: '早午餐' },
  { id: 5, label: '咖啡', value: '咖啡' },
  { id: 6, label: '宵夜', value: '宵夜' },
  { id: 7, label: '火鍋', value: '火鍋' },
  { id: 8, label: '炸物', value: '炸物' },
  { id: 9, label: '牛排', value: '牛排' },
  { id: 10, label: '素食', value: '素食' },
  { id: 11, label: '自助餐', value: '自助餐' },
  { id: 12, label: '速食', value: '速食' },
  { id: 13, label: '飲料', value: '飲料' },
];

export default function FoodSelect() {
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
      "way1":'s_type',
      "way2":null,
      'params':selectedOptions[0],

    }
    // 使用fetch函式向後端傳送Post請求
    fetch('http://localhost:3001/api/search', {
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
    fetch('http://localhost:3001/api/food/random', {
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
