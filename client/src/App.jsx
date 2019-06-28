import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

//import components
import PrivateRoute from "./components/common/PrivateRoute";

import DefaultNavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateResume from "./components/resume/CreateResume";
// import EditResume from "./components/profiles/EditResume";
import ResumeProfile from "./components/profiles/ResumeProfile";
import NotFound from "./components/not-found/NotFound";

import "./App.css";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <DefaultNavbar />
            <Route exact path="/" component={Landing} />
            <div className="container m-3">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* if not logged in redirect from dashboard to login */}
              <Switch>
                {/* <PrivateRoute exact path="/profile-resume" component={ResumeProfile} /> */}
                {/* below line is temporary */}
                <Route exact path="/profile/resume" component={ResumeProfile} />
              </Switch>
              <Switch>
                {/* <PrivateRoute exact path="/create-resume" component={CreateResume} /> */}
                {/* below line is temporary */}
                <Route
                  exact
                  path="/profile/resume/create"
                  component={CreateResume}
                />
              </Switch>
              <Switch>
                {/* <PrivateRoute exact path="/profile/resume/edit" component={EditResume} /> */}
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
