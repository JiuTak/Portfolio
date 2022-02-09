import React from "react";
import Navbar from "./components/Navbar/Navbar.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/services" exact component={Services} />
          <Route path="/projects" exact component={Projects} /> */}
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
