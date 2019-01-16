import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Layout = props => {
  return (
    <Fragment>
      <Navbar history={props.history} />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
