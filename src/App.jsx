import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import WrapHome from "./WrapHome";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<WrapHome />} />
      </Routes>
    </>
  );
};

export default App;
