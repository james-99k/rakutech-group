import React, { Component } from "react";
import './board-admin.component.scss'

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import Home from "./admin-pages/Home";
import Product from "./admin-pages/Product"
import UserManager from "./admin-pages/UserManager"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="adminPage">
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header> */}
        <Router>
          <Topbar />
          <div className="adminContainer">
            <Sidebar />
            <Switch>
              <Route exact path="/admin">
                <Home />
              </Route>
              <Route path="/products">
                <Product />
              </Route>
              <Route path="/userManager">
                <UserManager />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}