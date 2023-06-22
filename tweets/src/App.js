import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import { lazy } from "react";
import Tweets from "./pages/Tweets";
import Home from "./pages/Home";

// const HomePage = lazy(() => import("./pages/Home.js"));
// const Tweets = lazy(() => import("./pages/Tweets.js"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
