import React, { useEffect } from "react";
import Auth from "./features/auth/Auth";
import Navigation from "./features/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainGame from "./features/main/MainGame";
import { useDispatch } from "react-redux";
import { getQuestions } from "./store/api.Questions";

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    getQuestions()
    .then((questions) => {
      const action = {type: 'Get_Questions', payload: questions}
      dispatch(action);
    });
  }, [dispatch]);
  
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
