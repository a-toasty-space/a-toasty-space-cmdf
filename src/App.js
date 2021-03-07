import React from "react";
import ReactDOM from "react-dom";
import firebase from 'firebase';
import { Router, Route, Switch } from 'react-router-dom';

import Nav from "./components/Nav/Nav";

import MainPage from "./pages/MainPage";
import SendPage from "./pages/SendPage";
import FAQPage from "./pages/FAQPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AboutUsPage from "./pages/AboutUsPage";
import SupportUsPage from "./pages/SupportUsPage";
import DashboardPage from "./pages/DashboardPage";
import ReadPage from "./pages/ReadPage";
import ErrorPage from "./pages/ErrorPage";

class App extends React.Component {
  render() {
    return (<>
      <Nav />
      
      <div id="content">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/send" component={SendPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/aboutus" component={AboutUsPage} />
          <Route path="/supportus" component={SupportUsPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/read" component={ReadPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </>);
  } 
}

export default App;