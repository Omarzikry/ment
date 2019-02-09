import React, { Component } from "react";
import classes from "./BlogFeaturedGrid.css";
import axios from "../../axios";
import Spinner from "../UI/Spinner/Spinner";
import Video from "../UI/Video/Video";
import TrendingLabel from "../UI/TrendingLabel/TrendingLabel";
import { handleDate } from "../../utils";

class BlogFeaturedGrid extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    axios
      .get("/articles.json")
      .then(res => {
        console.log(res);
        this.setState({ articles: res.data });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  handleClick = id => {
    this.props.history.push("/blog/" + id);
  };

  render() {
    const { articles, loading } = this.state;
    let verticalFeatured,
      featuredRight,
      featuredLeft,
      trending = <Spinner />;

    if (!loading) {
      // ============= Get the heighest views post ============= //
      const articlesViewsArray = [];
      for (let article of articles) {
        articlesViewsArray.push(article.views);
      }
      const heighestViews = Math.max.apply(null, articlesViewsArray);

      articles.map(article => {
        // ============= Get one article from articles array then return its jsx ============= //
        const singleMedia = article.media.slice(0, 1);
        const showOneMedia = singleMedia.map(mediaFile => {
          return mediaFile.includes(".mp4") ? (
            <Video
              mediaFile={mediaFile}
              poster={article.poster}
              key={article.id + mediaFile}
            />
          ) : (
            <img
              src={mediaFile}
              alt={article.title}
              key={article.id + mediaFile}
            />
          );
        });
        const title = (
          <div>
            <p className={classes.title}>{article.title}</p>
            <p className={classes.date}>{handleDate(article.createdDate)}</p>
          </div>
        );

        // ============= featured article 1 ============= //

        if (article.featured1) {
          verticalFeatured = (
            <div
              className={[
                classes.verticalFeatured,
                classes.contentControl
              ].join(" ")}
              onClick={() => {
                this.handleClick(article.id);
              }}
            >
              {showOneMedia}
              {title}
            </div>
          );
        }

        // ============= featured article 2 ============= //
        if (article.featured2) {
          featuredRight = (
            <div
              className={[classes.featuredRight, classes.contentControl].join(
                " "
              )}
            >
              {showOneMedia}
            </div>
          );
        }
        // ============= featured article 3 ============= //
        if (article.featured3) {
          featuredLeft = (
            <div
              className={[classes.featuredLeft, classes.contentControl].join(
                " "
              )}
              onClick={() => {
                this.handleClick(article.id);
              }}
            >
              {showOneMedia}
              {title}
            </div>
          );
        }

        // ============= trending Article ============= //
        if (heighestViews === article.views) {
          const singleMedia = article.media.slice(0, 2);
          trending = (
            <div
              className={[classes.trending, classes.contentControl].join(" ")}
              onClick={() => {
                this.handleClick(article.id);
              }}
            >
              {singleMedia.map(mediaFile => {
                return mediaFile.includes(".mp4") ? (
                  <Video
                    mediaFile={mediaFile}
                    poster={article.poster}
                    key={article.id + mediaFile}
                  />
                ) : (
                  <img
                    src={mediaFile}
                    alt={article.title}
                    key={article.id + mediaFile}
                  />
                );
              })}
              <div className={classes.trendingOverlay}>
                <p className={classes.trendingTitle}>{article.title}</p>
                <p className={classes.date}>
                  {handleDate(article.createdDate)}
                </p>
              </div>
              <TrendingLabel right="10px" top="10px" />
            </div>
          );
        }
      });
    }
    return (
      <div className={classes.blogFeaturedGrid}>
        {trending}
        {featuredLeft}
        {featuredRight}
        {verticalFeatured}
      </div>
    );
  }
}

export default BlogFeaturedGrid;
