import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './POC/SignUp';
import Login from './POC/Login';
import Home from './POC/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
