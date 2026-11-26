import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/entry" element={<HomePage></HomePage>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
