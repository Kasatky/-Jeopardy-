import React, { useEffect } from "react";
import Auth from "./features/auth/Auth";
import Navigation from "./features/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainGame from "./features/main/MainGame";

function App(): JSX.Element {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainGame />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
