import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  BoardList,
  BoardNew,
  BoardDetail,
  BoardUpdate,
} from "./components/Board";
import { Login } from "./components/Login";
import { Join } from "./components/Join";
// import { Nav } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="main-wrap"> */}
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/new" element={<BoardNew />} />
        <Route path="/detail" element={<BoardDetail />} />
        <Route path="/update" element={<BoardUpdate />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
