//import { Routes, Route, Link } from "react-router-dom";
//import Home from "./component/Pages/Home";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddData from "./component/addData";
import Home from "./component/Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/addData" element={<AddData />}></Route>
    </Routes>
  );
}

export default App;
