import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

//import components
// import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import NotFound from "./components/not-found/NotFound";


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Landing} />
          <div className="container">
            
            <Route exact path="/not-found" component={NotFound} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App