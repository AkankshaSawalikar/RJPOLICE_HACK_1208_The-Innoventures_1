// App.js
import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer.js";
//import SignUp from "./components/signup";
//import Login from "./components/Login";
import PrivateComponent from "./components/PrivateComponent.js";
import AddFeedback from "./components/add-feedback";
import Quiz from "./components/Quiz.js";
import "./Quiz.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          {/* <Route element={<PrivateComponent />}>
            <Route path="/add-feedback" element={<AddFeedback />} />
            <Route path="/add" element={<AddFeedback />} />
            <Route
              path="/update"
              element={<h1>Update the Product Components</h1>}
            />
            <Route path="/logout" element={<h1>logout Components</h1>} />
            <Route
              path="/profile"
              element={<h1>profile of Product Components</h1>}
            />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      <>
        <Quiz />
          
      </>
    </div>
  );
}

export default App;
