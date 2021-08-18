import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardSeller from "./components/board-seller.component";
import BoardAdmin from "./components/board-admin.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

//-------------------------------------------------------RAKUTECH PAGES
import RakutechHome from "./rakutech/Pages/HomePage/Home"
import RakutechLogin from "./rakutech/Pages/SignIn/SignIn"
import RakutechSignUp from "./rakutech/Pages/SignUp/SignUp"
import RakutechStore from "./rakutech/Pages/Store/Store"
import RakutechProduct from "./rakutech/Pages/Products/ProductPage"
import RakutechCheckout from "./rakutech/Pages/Checkout/Checkout"


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showSellerBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showSellerBoard: user.roles.includes("ROLE_SELLER"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      showSellerBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showSellerBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div>
          {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              RAKUTECH
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {showSellerBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Seller Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav> */}

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={RakutechHome} />
              <Route exact path="/SignIn" component={RakutechLogin} />
              <Route exact path="/SignUp" component={RakutechSignUp} />
              <Route exact path="/Store" component={RakutechStore} /> 
              <Route exact path="/Checkout" component={RakutechCheckout} /> 
              <Route exact path="/Products" component={RakutechProduct} /> 
                           
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardSeller} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>

          {/* <AuthVerify logOut={this.logOut}/> */}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);