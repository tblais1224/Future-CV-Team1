import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//import components
import PrivateRoute from "./components/common/PrivateRoute";
import DefaultNavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import CreateResume from "./components/resume/CreateResume";
// import EditResume from "./components/profiles/EditResume";
import ResumeProfile from "./components/profiles/ResumeProfile";
import NotFound from "./components/not-found/NotFound";


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <DefaultNavbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            {/* <Route exact path="/register-login" component={Register} /> */}
            {/* if not logged in redirect from dashboard to login */}
            <Switch>
              {/* <PrivateRoute exact path="/profile-resume" component={ResumeProfile} /> */}
              {/* below line is temporary */}
              <Route exact path="/profile-resume" component={ResumeProfile} />

            </Switch>
            <Switch>
              {/* <PrivateRoute exact path="/create-resume" component={CreateResume} /> */}
               {/* below line is temporary */}
              <Route exact path="/create-resume" component={CreateResume} />

            </Switch>
            <Switch>
              {/* <PrivateRoute exact path="/edit-resume" component={EditResume} /> */}
            </Switch>
            <Route exact path="/not-found" component={NotFound} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App