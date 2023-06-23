import { Navigate, Route, Routes } from "react-router-dom";
import Tweets from "./pages/Tweets";
import Home from "./pages/Home";

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
