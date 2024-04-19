import React, { useState } from 'react';

const FeedbackForm = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [suggestedStore, setSuggestedStore] = useState('');
  const [suggestedFeature, setSuggestedFeature] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 在這裡處理表單提交的邏輯，例如將數據發送到後端或執行其他操作

    // 清空表單數據
    setGender('');
    setAge('');
    setOccupation('');
    setSatisfaction('');
    setSuggestedStore('');
    setSuggestedFeature('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        性別：
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">請選擇</option>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </label>
      <br />

      <label>
        年齡：
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />

      <label>
        職業：
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </label>
      <br />

      <label>
        使用滿意度：
        <select
          value={satisfaction}
          onChange={(e) => setSatisfaction(e.target.value)}
        >
          <option value="">請選擇</option>
          <option value="非常滿意">非常滿意</option>
          <option value="滿意">滿意</option>
          <option value="一般">一般</option>
          <option value="不滿意">不滿意</option>
        </select>
      </label>
      <br />

      <label>
        建議店家：
        <input
          type="text"
          value={suggestedStore}
          onChange={(e) => setSuggestedStore(e.target.value)}
        />
      </label>
      <br />

      <label>
        建議功能：
        <textarea
          value={suggestedFeature}
          onChange={(e) => setSuggestedFeature(e.target.value)}
        />
      </label>
      <br />

      <button type="submit">提交</button>
    </form>
  );
};

export {FeedbackForm}
