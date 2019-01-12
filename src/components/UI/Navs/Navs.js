import React, { Component } from "react";
import NavsLinks from "./NavsLinks/NavsLinks";
import NavsTabs from "./NavsTabs/NavsTabs";
import classes from "./Navs.css";
import ExploreBtn from "../ExploreBtn/ExploreBtn";

class Navs extends Component {
  state = {
    activeLink: "2",
    loading: true
  };

  myCallback = dataFromChild => {
    this.setState({ activeLink: dataFromChild, loading: false });
    //console.log(dataFromChild + 'data from child')
  };

  componentDidUpdate() {
    console.log(this.state.activeLink);
  }
  clickHandler = () => {
    this.props.history.push("/shop");
  };

  render() {
    const { activeLink } = this.state;
    return (
      <div className={classes.navs}>
        <NavsLinks callbackFromParent={this.myCallback} />
        <NavsTabs active={activeLink} key={activeLink} />
        <ExploreBtn click={this.clickHandler}>Explore more</ExploreBtn>
      </div>
    );
  }
}

export default Navs;
