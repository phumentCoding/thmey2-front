import React from "react";
import "./App.css";

import FrontRoute from "./front/routes";
import BackRoute from "./Backend/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Frontend Routes */}
          <Route path="/*" element={<FrontRoute />} />
            
          {/* Backend/Admin Routes */}
          <Route path="/admin/*" element={<BackRoute />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
