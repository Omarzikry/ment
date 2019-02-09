import React, { Component, Fragment } from "react";
import LogoImg from "../../assets/images/Logo.png";
import classes from "./Navbar.css";
import Navlink from "./Navlink/Navlink";
import ToggleBtn from "../UI/ToggleBtn/ToggleBtn";
import BlueBox from "../UI/BlueBox/BlueBox";
import { Route } from "react-router-dom";
class Navbar extends Component {
  state = {
    navOpened: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ navOpened: false });
    }
  }
  handletoggleClick = () => {
    this.setState({ navOpened: !this.state.navOpened });
  };

  render() {
    if (this.state.navOpened) {
      document.documentElement.style.overflow = "hidden"; // firefox, chrome
      document.body.scroll = "no"; // ie only
    } else {
      document.documentElement.style.overflow = "auto"; // firefox, chrome
      document.body.scroll = "yes"; // ie only
    }
    let navBar = (
      <header className={classes.Navbar}>
        <nav>
          <ToggleBtn
            extraStyles={classes.toggleBtn}
            click={this.handletoggleClick}
          />
          <ul
            className={[
              classes.leftNav,
              this.state.navOpened ? classes.navOpened : null
            ].join(" ")}
          >
            <li>
              <Navlink goTo="/">Home</Navlink>
            </li>
            <li>
              <Navlink goTo="/shop">Shop</Navlink>
            </li>
            <li>
              <Navlink goTo="/blog">Blog</Navlink>
            </li>
          </ul>
          <div className={classes.logo}>
            <img src={LogoImg} alt="Ment logo" />
          </div>
          <ul className={classes.rightNav}>
            <li>
              <Navlink goTo="/blog">
                <i className="fas fa-search" />
              </Navlink>
            </li>
          </ul>
        </nav>
        <Route
          path="/"
          exact
          render={props => (
            <BlueBox width="600px" height="500px" top="0" right="0" />
          )}
        />
      </header>
    );
    if (this.props.history.location.pathname === "/blog") {
      navBar = (
        <header className={classes.Navbar}>
          <nav>
            <ul
              className={[
                classes.leftNavBlog,
                this.state.navOpened ? classes.navOpenedBlog : null
              ].join(" ")}
            >
              <li>
                <Navlink goTo="/">Home</Navlink>
              </li>
              <li>
                <Navlink goTo="/shop">Shop</Navlink>
              </li>
              <li>
                <Navlink goTo="/blog">Blog</Navlink>
              </li>
            </ul>
            <div className={classes.logo}>
              <img src={LogoImg} alt="Ment logo" />
            </div>
            <ul className={classes.rightNav}>
              {/* <li>
                <form>
                  <input
                    type="text"
                    placeholder="Search Posts"
                    className={classes.search}
                  />
                  <i className="fas fa-search" />
                </form>
              </li> */}
              <li>
                <ToggleBtn
                  extraStyles={classes.toggleBtnBlog}
                  click={this.handletoggleClick}
                />
              </li>
            </ul>
          </nav>
        </header>
      );
    }
    return <Fragment>{navBar}</Fragment>;
  }
}

export default Navbar;
