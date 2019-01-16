import React, { Component, Fragment } from "react";
import "./normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carousel from "./components/UI/Carousel/Carousel";
import Navs from "./components/UI/Navs/Navs";
import Layout from "./containers/Layout/Layout";
import Blog from "./containers/Blog/Blog";
import SimilarPosts from "./components/SimilarPosts/SimilarPosts";
import BlogFeaturedGrid from "./components/BlogFeaturedGrid/BlogFeaturedGrid";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            render={({ history }) => {
              return (
                <Layout history={history}>
                  <Switch>
                    <Route path="/blog" component={Blog} />
                    <Route
                      path="/"
                      exact
                      render={({ history }) => {
                        return (
                          <Fragment>
                            <Carousel auto={true} />
                            <Navs history={history} />
                            <SimilarPosts
                              history={history}
                              title="Our Stories"
                            />
                            <BlogFeaturedGrid history={history} />
                          </Fragment>
                        );
                      }}
                    />
                  </Switch>
                </Layout>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
