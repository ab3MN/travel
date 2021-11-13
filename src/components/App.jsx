import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Products from "../pages/Products/Products";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />{" "}
      <Switch>
        <Route exact path='/' component={HomePage} />{" "}
        <Route exact path='/products' component={Products} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/sign-up' component={SignUp} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
