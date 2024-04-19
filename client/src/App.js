import "./App.css";
// import { useState } from "react";
// import Axios from "axios";
import Select  from "./select.js";
import React  from "react";
import FoodSelect from "./foodSelect.js";
import AreaSelect from "./areaSelect.js";
import {BrowserRouter as Routes ,Router,Route,Link} from 'react-router-dom'
// import { FeedbackForm } from "./feedback.js";
// import { ListProvider } from "./ListContext";

function App() {
  // 頁面編排
  function Page(){
    return(
      <div>
        <h1>今天吃甚麼？</h1>
        <Link to="/random">全選</Link><br/>
        <Link to="/area">校區選擇</Link><br/>
        <Link to="/food">食物類型選擇</Link><br/>
      </div>
    )
  }

  return(
    <div>
    <Router>
      <div>
        <Routes>
          <Route path="/" />
          <Route path="/random"/>
          <Route path="/area"/>
          <Route path="/food"/>
        </Routes>
      </div>
    </Router>
    </div>
  )

}

export default App;
