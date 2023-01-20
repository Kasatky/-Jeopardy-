import React from "react";
import Auth from "./features/auth/Auth";
import Navigation from "./features/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainGame from "./features/main/MainGame";

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainGame />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
