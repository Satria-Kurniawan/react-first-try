import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ModalPage from "./pages/ModalPage";
import Form from "./pages/Form";

import NavbarComponent from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <NavbarComponent />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/modalpage" element={<ModalPage />}></Route>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
