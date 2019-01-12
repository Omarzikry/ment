import React, { Component } from "react";
import classes from "./BlogFeaturedGrid.css";
class BlogFeaturedGrid extends Component {
  render() {
    return (
      <div className={classes.blogFeaturedGrid}>
        <div className={classes.trending} />
        <div className={classes.featuredLeft} />
        <div className={classes.featuredRight} />
        <div className={classes.verticalFeatured} />
      </div>
    );
  }
}

export default BlogFeaturedGrid;
